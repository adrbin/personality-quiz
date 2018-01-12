import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Type.css';

const Loader = ({ isLoading, description, url }) =>
  isLoading ? (
    <div className="loader" />
  ) : (
    <Description description={description} url={url} />
  );

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

const Description = ({ description, url }) => (
  <div className="description">
    <blockquote>{description}</blockquote>
    <div className="wikipedia">
      More at{' '}
      <a href={url} target="_blank">
        Wikipedia
      </a>
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

class Type extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      description: ''
    };
  }

  componentDidMount() {
    this.fetchFromWikipedia();
  }

  compnentDidUpdate() {
    this.fetchFromWikipedia();
  }

  fetchFromWikipedia() {
    const url =
      'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=&explaintext=&titles=' +
      this.props.type;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        const key = Object.keys(data.query.pages)[0];
        const description = data.query.pages[key].extract;
        this.setState({ description, isLoading: false });
      });
  }

  render() {
    const url = 'https://en.wikipedia.org/wiki/' + this.props.type;
    return (
      <div className="type">
        <Loader
          isLoading={this.state.isLoading}
          description={this.state.description}
          url={url}
        />
      </div>
    );
  }
}

Type.propTypes = {
  type: PropTypes.string.isRequired
};

export default Type;
