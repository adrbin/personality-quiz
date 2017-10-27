import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Result from './Result';
import Quiz from './Quiz';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="quiz">
          <header>
            <h1>Personality Quiz</h1>
          </header>
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;
