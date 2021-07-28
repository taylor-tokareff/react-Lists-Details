import React from 'react';
import Character from './characters/CharacterMain';

export default function App() {
  return (
    <Character
      character="Bender"
      species="Robot"
      age="4-10"
      planet="Earth"
    />
  );
}
