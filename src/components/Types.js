import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Type from './Type';
import TypesIndex from './TypesIndex';

const types = [
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ'
];

const TypeWithDescription = ({ type }) => (
  <div>
    <h1>{type}</h1>
    <Type type={type} />
  </div>
);

TypeWithDescription.propTypes = {
  type: PropTypes.string.isRequired
};

const Types = ({ match }) => {
  return (
    <Router>
      <div className="content">
        <Route
          exact
          path={match.url}
          render={() => <TypesIndex types={types} url={match.url} />}
        />
        <Route
          path={match.url + '/:type'}
          render={prop => {
            const type = prop.match.params.type;
            if (!types.includes(type)) {
              return <Redirect to={match.url} />;
            }
            return <TypeWithDescription type={type} />;
          }}
        />
      </div>
    </Router>
  );
};

Types.propTypes = {
  match: PropTypes.object.isRequired
};

export default Types;
