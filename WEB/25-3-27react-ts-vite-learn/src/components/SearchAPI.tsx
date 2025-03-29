import { useState, useEffect } from 'react';
import './SearchAPI.css';

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

const SearchAPI = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Set loading state
    setLoading(true);

    // Clear previous timeout if exists
    const timeoutId = setTimeout(() => {
      // Simulate API call
      const mockResults: SearchResult[] = [
        { id: 1, title: `Result for "${query}" #1`, description: 'This is the first result description' },
        { id: 2, title: `Result for "${query}" #2`, description: 'This is the second result description' },
        { id: 3, title: `Result for "${query}" #3`, description: 'This is the third result description' },
      ];
      
      setResults(mockResults);
      setLoading(false);
    }, 1000); // 1 second delay to simulate API call

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="search-container">
      <h2>搜索API</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="输入搜索关键词..."
        className="search-input"
      />
      
      {loading && <div className="loading">加载中...</div>}
      
      {!loading && results.length > 0 && (
        <div className="results-container">
          <h3>搜索结果:</h3>
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.id} className="result-item">
                <h4>{result.title}</h4>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {!loading && query && results.length === 0 && (
        <div className="no-results">无搜索结果</div>
      )}
    </div>
  );
};

export default SearchAPI; 