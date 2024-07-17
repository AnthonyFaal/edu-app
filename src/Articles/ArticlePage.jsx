import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articles.json'; 
import './article_styles/articlePage.css'; // Assuming you have separate CSS for ArticlePage

const ArticlePage = () => {
  const { id } = useParams(); 
  const article = articlesData.article.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page-container">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-introduction">{article.content.introduction}</p>
      <p className="article-author">Author: {article.author}</p>
      <hr />
      {article.content.sections.map((section, index) => (
        <div key={index} className="article-section">
          <h2 className="section-heading">{section.heading}</h2>
          <p className="section-text">{section.text}</p>
        </div>
      ))}
      <div className="article-image-container">
        <img src={article.image} alt={article.title} className="article-image" />
      </div>
    </div>
  );
};

export default ArticlePage;
