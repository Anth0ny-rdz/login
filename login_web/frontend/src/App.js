import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/articles/');
    setArticles(response.data);
  };

  const createArticle = async () => {
    await axios.post('http://127.0.0.1:8000/api/articles/', { title, content });
    fetchArticles();
  };

  const deleteArticle = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/articles/${id}/`);
    fetchArticles();
  };

  return (
    <div>
      <h1>CRUD con Django y React</h1>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={createArticle}>Crear Artículo</button>
      </div>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button onClick={() => deleteArticle(article.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;