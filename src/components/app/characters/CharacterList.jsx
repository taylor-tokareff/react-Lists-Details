import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <character
        character={character.character}
        species={character.species}
        age={character.age}
        planet={character.planet}
      />

    </li>

  ));


  return <ul>{characterElements}</ul>;


};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    character: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    planet: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
