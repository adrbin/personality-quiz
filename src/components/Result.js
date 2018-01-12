import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import Type from './Type';
import '../styles/Result.css';

const MAX_SCORE = 48;

function calcArray(array, operations) {
  return operations
    .map((op, i) => (op >= 0 ? array[op - 1] : -array[-op - 1]))
    .reduce((sum, val) => sum + val);
}

function calcType(score) {
  const ie = 30 + calcArray(score, [-3, -7, -11, 15, -19, 23, 27, -31]);
  const sn = 12 + calcArray(score, [4, 8, 12, 16, 20, -24, -28, 32]);
  const ft = 30 + calcArray(score, [-2, 6, 10, -14, -18, 22, -26, -30]);
  const jp = 18 + calcArray(score, [1, 5, -9, 13, -17, 21, -25, 29]);

  const ieType = ie > 24 ? 'E' : 'I';
  const snType = sn > 24 ? 'N' : 'S';
  const ftType = ft > 24 ? 'T' : 'F';
  const jpType = jp > 24 ? 'P' : 'J';

  const type = ieType + snType + ftType + jpType;

  return {
    ie,
    sn,
    ft,
    jp,
    type
  };
}

const Chart = ({ score, labels, colors }) => {
  let scoresInPercent = Math.floor(score / MAX_SCORE * 100);
  let scoresInPercents = [scoresInPercent, 100 - scoresInPercent];
  let data = {
    datasets: [
      {
        data: scoresInPercents,
        backgroundColor: colors
      }
    ],
    labels: labels
  };
  return <Pie data={data} />;
};

const Result = ({ answers }) => {
  let score = calcType(answers);
  return (
    <div className="result">
      <h1> Your type is {score.type}</h1>
      <Chart
        score={score.ie}
        labels={['Extroversion', 'Introvertion']}
        colors={['red', 'blue']}
      />
      <Chart
        score={score.sn}
        labels={['Sensing', 'Intuition']}
        colors={['green', 'yellow']}
      />
      <Chart
        score={score.ft}
        labels={['Feeling', 'Thinking']}
        colors={['pink', 'MediumSeaGreen']}
      />
      <Chart
        score={score.jp}
        labels={['Judgment', 'Perception']}
        colors={['orange', 'purple']}
      />
      <Type type={score.type} />
    </div>
  );
};

Result.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Result;
