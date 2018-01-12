import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Index.css';

const Index = () => (
  <div className="index">
    <div>
      <Link to="/quiz">Quiz</Link>
    </div>
    <div>
      <Link to="/types">Personality types</Link>
    </div>
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default Index;
