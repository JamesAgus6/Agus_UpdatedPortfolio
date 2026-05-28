import { useState, useEffect } from 'react';
import { Comment, addComment, subscribeToComments } from '../../services/commentService';

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Real-time listener
  useEffect(() => {
    const unsubscribe = subscribeToComments((updatedComments) => {
      setComments(updatedComments);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addComment({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setFormData({ name: '', email: '', message: '' });
      // Comments will auto-update via real-time listener
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Comments ({comments.length})</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p className="mt-2">{comment.message}</p>
            <p className="text-xs text-gray-400 mt-2">
              {comment.timestamp?.toDate().toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
