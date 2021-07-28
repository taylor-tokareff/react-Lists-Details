import React from 'react';
import Proptypes from 'prop-types';

const Character = ({ species, age, planet }) => (
  Species = 'Robot',
  Age = '4-10',
  Planet = 'Earth',
);

Character.propTypes = {
  species: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  planet: PropTypes.string.isRequired,
};

export default Character;


