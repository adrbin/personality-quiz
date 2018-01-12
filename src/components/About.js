import React from 'react';
import '../styles/About.css';

const About = ({ match }) => (
  <div className="about">
    <a href="https://openpsychometrics.org/tests/OEJTS/development/">
      Open Extended Jungian Type Scales
    </a>: The system of personality types proposed by Carl Jung (1921) and later
    refined by C. Myers and I. M. Briggs has become an extremely widely used
    personality theory in self-help, business management, counselling and
    spiritual development contexts, but it is not commonly used in academic
    research where, like all type theories, it is treated sceptically. The
    system produces 16 personality types on the basis of four dichotomies and is
    the system used in the Myers Briggs Type Indicator and Keirsey Temperament
    Sorter instruments, among many others. The OEJS is a free and open source
    measure of the four dichotomies which yields an equivalent result to the
    usual tests.
  </div>
);

export default About;
