import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import ArticleList from './Articles/ArticleList';
import ArticlePage from './Articles/ArticlePage';
 
function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
} 

export default App;
