import { useState } from 'react';
import './App.css';

type Article = {
  headline: string;
  intro: string;
  body: string;
  conclusion: string;
};

function App() {
  const [topic, setTopic] = useState('');
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  const generateArticle = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/generate-article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setArticle(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="header">AI Article Generator</h1>

        {/* Removed bot image */}

        <input
          type="text"
          placeholder="Enter a topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="input-field"
        />

        <button
          onClick={generateArticle}
          disabled={loading}
          className={`generate-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>

        {article && (
          <div className="article">
            <h2 className="article-headline">{article.headline}</h2>
            <p>
              <strong>Intro:</strong> {article.intro}
            </p>
            <p>
              <strong>Body:</strong> {article.body}
            </p>
            <p>
              <strong>Conclusion:</strong> {article.conclusion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
