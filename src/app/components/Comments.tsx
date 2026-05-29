import { useState, useEffect } from 'react';
import { Send, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { Comment, addComment, subscribeToComments } from '../../services/commentService';

// Compact Comment Form Component
export function CommentForm() {
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('File size must be less than 5MB');
      return;
    }

    // Compress image before storing
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Reduce dimensions to max 400x400
        if (width > 400 || height > 400) {
          const ratio = Math.min(400 / width, 400 / height);
          width = width * ratio;
          height = height * ratio;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        // Convert to base64 with compression
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        setPreviewUrl(compressedBase64);
        setProfilePhoto(file);
        console.log('Photo compressed from', Math.round(file.size / 1024), 'KB');
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // Convert profile photo to base64 if it exists
      let photoData: string | undefined = undefined;
      if (profilePhoto) {
        photoData = previewUrl; // Already in base64 format
      }

      console.log('Submitting comment...', { name: formData.name, hasPhoto: !!photoData });

      const commentId = await addComment({
        name: formData.name.trim(),
        email: `user_${Date.now()}@portfolio.local`,
        message: formData.message.trim(),
        profilePhoto: photoData,
      });

      console.log('Comment added with ID:', commentId);
      
      setFormData({ name: '', message: '' });
      setProfilePhoto(null);
      setPreviewUrl('');
      toast.success('Comment posted successfully!');
    } catch (error: any) {
      console.error('Error submitting comment:', error);
      const errorMessage = error?.message || 'Unknown error';
      const errorCode = error?.code || 'UNKNOWN';
      console.error('Firebase error code:', errorCode);
      console.error('Firebase error message:', errorMessage);
      
      if (errorCode === 'permission-denied') {
        toast.error('Permission denied. Please check Firestore rules are published.');
      } else if (errorCode === 'unavailable') {
        toast.error('Firebase service temporarily unavailable. Please try again.');
      } else {
        toast.error('Error posting comment. Check console for details.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Field */}
      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-primary mb-2 block" style={{ fontFamily: 'var(--font-mono)' }}>
          NAME <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-3 py-2 glass border border-solid border-[rgba(244,124,124,0.3)] rounded-lg bg-secondary/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-primary mb-2 block" style={{ fontFamily: 'var(--font-mono)' }}>
          MESSAGE <span className="text-primary">*</span>
        </label>
        <textarea
          placeholder="Your message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={3}
          className="w-full px-3 py-2 glass border border-solid border-[rgba(244,124,124,0.3)] rounded-lg bg-secondary/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
        />
      </div>

      {/* Profile Photo Upload */}
      <div>
        <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block" style={{ fontFamily: 'var(--font-mono)' }}>
          PHOTO (OPTIONAL)
        </label>
        <label className="flex flex-col items-center justify-center w-full px-3 py-3 border-2 border-dashed border-[rgba(244,124,124,0.3)] rounded-lg cursor-pointer hover:border-primary transition-colors bg-secondary/30">
          <Upload size={18} className="text-primary mb-1" />
          <p className="text-xs font-medium text-foreground">Choose Photo</p>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />
        </label>
        {previewUrl && (
          <div className="mt-2">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-10 h-10 rounded-full object-cover border border-primary"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-3 py-2 bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
      >
        <Send size={14} />
        <span>{loading ? 'POSTING...' : 'POST'}</span>
      </button>
    </form>
  );
}

// Comments Feed Component
export function CommentsFeed() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    console.log('Setting up comments listener...');
    const unsubscribe = subscribeToComments((updatedComments) => {
      console.log('Comments updated:', updatedComments);
      setComments(updatedComments);
    });

    return () => {
      console.log('Cleaning up comments listener');
      unsubscribe();
    };
  }, []);

  const adminUsers = ['James', 'james'];

  return (
    <div className="space-y-2 max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2">
      {/* Pinned Admin Comment */}
      <div className="glass border border-solid border-primary/50 rounded-2xl p-4 bg-primary/5 shadow-lg shadow-primary/10 flex-shrink-0">
        <div className="flex gap-3">
          {/* Profile Avatar */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center border border-primary/50 min-w-[40px]">
              <span className="text-xs font-bold text-primary">J</span>
            </div>
          </div>

          {/* Comment Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <p className="font-semibold text-sm text-foreground">James</p>
              <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 whitespace-nowrap">
                Admin
              </span>
              <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 whitespace-nowrap">
                Pinned
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Welcome! Leave a comment below. Feel free to reach out on Instagram @jade.vlmdrd for any questions!
            </p>
          </div>
        </div>
      </div>

      {/* User Comments */}
      {comments.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-xs text-muted-foreground">No comments yet. Be first to share!</p>
        </div>
      ) : (
        comments.map((comment) => {
          const isAdmin = adminUsers.includes(comment.name);
          return (
            <div
              key={comment.id}
              className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-lg p-3 hover:border-primary/50 transition-all flex-shrink-0"
            >
              <div className="flex gap-3">
                {/* Profile Photo or Avatar */}
                <div className="flex-shrink-0">
                  {comment.profilePhoto ? (
                    <img
                      src={comment.profilePhoto}
                      alt={comment.name}
                      className="w-10 h-10 rounded-full object-cover border border-primary/30 min-w-[40px]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 min-w-[40px]">
                      <span className="text-xs font-bold text-primary">
                        {comment.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Comment Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-foreground truncate">{comment.name}</p>
                    {isAdmin && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 whitespace-nowrap">
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed line-clamp-3">
                    {comment.message}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {comment.timestamp && new Date(comment.timestamp.seconds * 1000).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

// Legacy full component export for backward compatibility
export function Comments() {
  return (
    <div className="space-y-8">
      <div className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-8">
        <h3 className="flex items-center gap-3 text-2xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          <span className="text-primary">💬</span>
          Comments
        </h3>
        <CommentForm />
      </div>
      <CommentsFeed />
    </div>
  );
}
