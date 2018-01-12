import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/TypesIndex.css';

const TypesIndex = ({ types, url }) => {
  let renderedTypes = types.map(type => (
    <div key={type}>
      <Link to={`${url}/${type}`}>{type}</Link>
    </div>
  ));
  return <div className="types-index">{renderedTypes}</div>;
};

TypesIndex.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired
};

export default TypesIndex;
