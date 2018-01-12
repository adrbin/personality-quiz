import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Question from './Question';
import Result from './Result';
import StartQuiz from './StartQuiz';
import { questions } from '../questions.js';

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
        <Switch>
          <Route exact path={this.props.match.url} component={StartQuiz} />
          <Route
            path={this.props.match.url + '/result'}
            render={() => <Result answers={this.state.answers} />}
          />
          <Route
            exact
            path={this.props.match.url + '/:num'}
            render={prop => {
              console.log(prop);
              let num = parseInt(prop.match.params.num, 10);
              if (!num || num >= questions.length || num < 1) {
                return <Redirect to={this.props.match.url + '/1'} />;
              }
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
        </Switch>
      </div>
    );
  }
}

export default Quiz;
