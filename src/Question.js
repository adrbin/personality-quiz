import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

const BackButton = ({ num, url }) =>
  num > 1 ? (
    <Link to={`${url}/${num - 1}`} className="nav back">
      &lt;
    </Link>
  ) : (
    <p className="nav back" />
  );

const NextButton = ({ num, url, length }) =>
  num < length ? (
    <Link to={`${url}/${num + 1}`} className="nav back">
      &gt;
    </Link>
  ) : (
    <Link to={`${url}/result`} className="nav next">
      ?
    </Link>
  );

const Answer = ({ question, answer, id, onAnswerChange }) => (
  <div className="answer">
    <div className="options option1">{question[0]}</div>
    <input
      type="range"
      name="slider"
      orient="vertical"
      min="1"
      max="5"
      step="1"
      value={answer}
      onChange={e => onAnswerChange(id, parseInt(e.target.value, 10))}
    />
    <div className="options option2">{question[1]}</div>
  </div>
);

class Question extends Component {
  constructor() {
    super();
  }
  get id() {
    return this.props.num - 1;
  }
  render() {
    return (
      <div className="content">
        <BackButton num={this.props.num} url={this.props.url} />
        <Answer
          question={this.props.questions[this.id]}
          answer={this.props.answer}
          id={this.id}
          onAnswerChange={this.props.onAnswerChange}
        />
        <NextButton
          num={this.props.num}
          url={this.props.url}
          length={this.props.questions.length}
        />
      </div>
    );
  }
}

export default Question;
