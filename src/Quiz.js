import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Question from './Question';
import Result from './Result';
import StartQuiz from './StartQuiz';
import { questions } from './questions.js';
import './Quiz.css';

class Quiz extends Component {
  constructor() {
    super();
    this.state = { answers: Array(questions.length).fill(3) };
  }

  setAnswer(id, answer) {
    this.setState({
      answers: this.state.answers.map(
        (el, index) => (index === id ? answer : el)
      )
    });
  }

  render() {
    return (
      <div className="content">
        <Route exact path={this.props.match.url} component={StartQuiz} />
        <Route
          path={this.props.match.url + '/:num'}
          render={prop => {
            console.log(prop);
            const num = parseInt(prop.match.params.num, 10) || 1;
            const index = num - 1;
            return (
              <Question
                url={this.props.match.url}
                num={num}
                questions={questions}
                answer={this.state.answers[index]}
                onAnswerChange={this.setAnswer.bind(this)}
              />
            );
          }}
        />
        <Route path={this.props.match.url + '/result'} component={Result} />
      </div>
    );
  }
}

export default Quiz;
