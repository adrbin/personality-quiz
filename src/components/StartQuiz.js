import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StartQuiz.css';

const StartQuiz = ({ match }) => (
  <div className="start-quiz">
    <p>
      Choose one of the personality traits on the scale which describes you
      more.
    </p>
    <Link to={`${match.url}/1`}>Let's start the quiz</Link>
  </div>
);

export default StartQuiz;
