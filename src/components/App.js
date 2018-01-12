import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Result from './Result';
import Quiz from './Quiz';
import Index from './Index';
import Types from './Types';
import About from './About';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="quiz">
          <header>
            <h1>
              <Link to="/">Personality Quiz</Link>
            </h1>
          </header>
          <Route exact path="/" component={Index} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
          <Route path="/types" component={Types} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
