import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character, species, age, planet }) => (
  <div>
    <p>{character}</p>
    <p>{species}</p>
    <p>{age}</p>
    <p>{planet}</p>
  </div>
);

Character.propTypes = {
  character: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  planet: PropTypes.string.isRequired,
};

export default Character;


