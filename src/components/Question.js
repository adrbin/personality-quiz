import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Question.css';

const BackButton = ({ num, url }) =>
  num > 1 ? (
    <Link to={`${url}/${num - 1}`} className="nav back">
      &lt;
    </Link>
  ) : (
    <p className="nav back" />
  );

BackButton.propTypes = {
  num: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

const NextButton = ({ num, url, length }) =>
  num + 1 < length ? (
    <Link to={`${url}/${num + 1}`} className="nav next">
      &gt;
    </Link>
  ) : (
    <Link to={`${url}/result`} className="nav next">
      ?
    </Link>
  );

NextButton.propTypes = {
  num: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

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

Answer.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onAnswerChange: PropTypes.func.isRequired
};

const Question = ({ num, questions, answer, onAnswerChange, url }) => {
  let id = num - 1;
  return (
    <div className="question">
      <BackButton num={num} url={url} />
      <Answer
        question={questions[id]}
        answer={answer}
        id={id}
        onAnswerChange={onAnswerChange}
      />
      <NextButton num={num} url={url} length={questions.length} />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Question;
