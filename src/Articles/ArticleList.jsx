import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articles.json';
import './article_styles/articleList.css';

const ArticleList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articlesData.article.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  return (
    <div class="article-list-container">
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search by title or author"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
  <ul class="article-list">
    {filteredArticles.map((article) => (
      <li key={article.id} class="article-item">
        <Link to={`./article/${article.id}`} class="article-link">
          <div class="article-thumbnail">
            <img src={article.image} alt={article.title} class="article-image" />
          </div>
          <div class="article-details">
            <h2 class="article-title">{article.title}</h2>
            <p class="article-intro">{article.content.introduction}</p>
            <p class="article-author">Author: {article.author}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
  <a href="https://blog.bay-cities.com/blog/the-truth-about-a-circular-economy ">More...</a>
</div>
  );
};

export default ArticleList;
