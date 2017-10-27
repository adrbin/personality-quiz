import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

const BackButton = ({ num, url }) => {
  return num > 1 ? (
    <Link to={`${url}/${num - 1}`} className="nav back">
      &lt;
    </Link>
  ) : (
    <p className="nav back" />
  );
};

const NextButton = ({ num, url, length }) => {
  return num < length ? (
    <Link to={`${url}/${num + 1}`} className="nav back">
      &gt;
    </Link>
  ) : (
    <Link to={`${url}/result`} className="nav next">
      ?
    </Link>
  );
};

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
        <div className="answer">
          <div className="options option1">
            {this.props.questions[this.id][0]}
          </div>
          <input
            type="range"
            name="slider"
            orient="vertical"
            min="1"
            max="5"
            step="1"
            value={this.props.answer}
            onChange={e =>
              this.props.onAnswerChange(this.id, parseInt(e.target.value, 10))}
          />
          <div className="options option2">
            {this.props.questions[this.id][1]}
          </div>
        </div>
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
