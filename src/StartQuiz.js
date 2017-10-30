import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartQuiz.css';

class StartQuiz extends Component {
  render() {
    return (
      <Link to={`${this.props.match.url}/1`} className="start-quiz">
        Start the quiz
      </Link>
    );
  }
}

export default StartQuiz;
