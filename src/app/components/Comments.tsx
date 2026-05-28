import { useState, useEffect } from 'react';
import { Send, Upload } from 'lucide-react';
import { Comment, addComment, subscribeToComments } from '../../services/commentService';

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  // Real-time listener for comments
  useEffect(() => {
    const unsubscribe = subscribeToComments((updatedComments) => {
      setComments(updatedComments);
    });

    return () => unsubscribe();
  }, []);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // Convert profile photo to base64 if it exists
      let photoData: string | undefined = undefined;
      if (profilePhoto) {
        photoData = previewUrl; // Already in base64 format
      }

      await addComment({
        name: formData.name.trim(),
        email: `user_${Date.now()}@portfolio.local`, // Generate temporary email
        message: formData.message.trim(),
        profilePhoto: photoData,
      });

      setFormData({ name: '', message: '' });
      setProfilePhoto(null);
      setPreviewUrl('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error posting comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const adminUsers = ['James', 'james'];

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <div className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-3xl p-8">
        <h3 className="flex items-center gap-3 text-2xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          <span className="text-primary">💬</span>
          Comments ({comments.length})
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="text-xs tracking-[0.15em] uppercase text-primary mb-3 block" style={{ fontFamily: 'var(--font-mono)' }}>
              NAME <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 glass border border-solid border-[rgba(244,124,124,0.3)] rounded-xl bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="text-xs tracking-[0.15em] uppercase text-primary mb-3 block" style={{ fontFamily: 'var(--font-mono)' }}>
              MESSAGE <span className="text-primary">*</span>
            </label>
            <textarea
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 glass border border-solid border-[rgba(244,124,124,0.3)] rounded-xl bg-secondary/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Profile Photo Upload */}
          <div>
            <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block" style={{ fontFamily: 'var(--font-mono)' }}>
              PROFILE PHOTO (OPTIONAL)
            </label>
            <label className="flex flex-col items-center justify-center w-full px-4 py-8 border-2 border-dashed border-[rgba(244,124,124,0.3)] rounded-xl cursor-pointer hover:border-primary transition-colors bg-secondary/30">
              <div className="flex flex-col items-center justify-center py-4">
                <Upload size={32} className="text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Choose Profile Photo</p>
                <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoSelect}
                className="hidden"
              />
            </label>
            {previewUrl && (
              <div className="mt-3 relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border border-primary"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
          >
            <Send size={18} />
            <span>{loading ? 'POSTING...' : 'POST COMMENT'}</span>
          </button>
        </form>
      </div>

      {/* Comments Display Section */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => {
            const isAdmin = adminUsers.includes(comment.name);
            return (
              <div
                key={comment.id}
                className="glass border border-solid border-[rgba(244,124,124,0.3)] rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4">
                  {/* Profile Photo or Avatar */}
                  <div className="flex-shrink-0">
                    {comment.profilePhoto ? (
                      <img
                        src={comment.profilePhoto}
                        alt={comment.name}
                        className="w-12 h-12 rounded-full object-cover border border-primary/30"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="text-sm font-bold text-primary">
                          {comment.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Comment Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold text-foreground">{comment.name}</p>
                      {isAdmin && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                          Admin
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {comment.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground/70">
                        {comment.timestamp && new Date(comment.timestamp.seconds * 1000).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
