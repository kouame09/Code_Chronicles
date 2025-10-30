import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { BlogPost as BlogPostType } from './types/blog';

function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <div className="header-content">
            <button
              onClick={() => setSelectedPost(null)}
              className="logo"
            >
              {'</>'}
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="app-main">
          {selectedPost ? (
            <BlogPost
              post={selectedPost}
              onBack={() => setSelectedPost(null)}
            />
          ) : (
            <BlogList onPostSelect={setSelectedPost} />
          )}
        </main>

        <footer className="app-footer">
          <p>Code Chronicles © 2025</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
