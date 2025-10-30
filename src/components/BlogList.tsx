import { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import { SearchBar } from './SearchBar';
import { BlogPost } from '../types/blog';
import postsData from '../data/posts.json';

interface BlogListProps {
  onPostSelect: (post: BlogPost) => void;
}

export function BlogList({ onPostSelect }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const posts = postsData as BlogPost[];

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.author.toLowerCase().includes(query)
    );
  }, [searchQuery, posts]);

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h1 className="blog-list-title">Code Chronicles</h1>
        <p className="blog-list-subtitle">
          Insights and tutorials for modern development
        </p>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {filteredPosts.length === 0 ? (
        <div className="no-results">
          <p>No posts found matching your search.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => onPostSelect(post)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
