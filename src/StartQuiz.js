import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StartQuiz extends Component {
  render() {
    return <Link to={`${this.props.match.url}/1`}>Start the quiz</Link>;
  }
}

export default StartQuiz;
