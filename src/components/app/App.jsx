/* eslint-disable max-len */
import React from 'react';
import Character from './characters/CharacterMain';

export default function App() {
  return (
    <Character
      character="Bender"
      quote="Bite my shiny metal ass."
      image="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
    />
  );
}
