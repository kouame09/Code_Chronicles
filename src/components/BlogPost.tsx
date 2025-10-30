import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';
import { parseMarkdown } from '../utils/markdown';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const content = parseMarkdown(post.content);

  return (
    <div className="blog-post-container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft className="back-icon" />
        <span>Back to posts</span>
      </button>

      <article className="blog-post">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>

          <div className="post-meta">
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

          <div className="post-tags">
            <Tag className="tags-icon" />
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-content">
          {content}
        </div>
      </article>
    </div>
  );
}
