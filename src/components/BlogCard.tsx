import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article className="blog-card" onClick={onClick}>
      <div className="blog-card-header">
        <h2 className="blog-card-title">{post.title}</h2>
      </div>

      <p className="blog-card-excerpt">{post.excerpt}</p>

      <div className="blog-card-meta">
        <div className="meta-item">
          <User className="meta-icon" />
          <span>{post.author}</span>
        </div>
        <div className="meta-item">
          <Calendar className="meta-icon" />
          <span>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
      </div>

      <div className="blog-card-tags">
        <Tag className="tags-icon" />
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
