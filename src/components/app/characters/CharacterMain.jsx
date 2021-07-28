import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character, quote, image }) => (
  <figure>
    <p>{character}</p>
    <p>{quote}</p>
    <p>{image}</p>
  </figure>
);

Character.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;


