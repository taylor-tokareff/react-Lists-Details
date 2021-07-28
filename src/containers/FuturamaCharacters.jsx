import React, { Component } from 'react';
import CharacterList from '../components/app/characters/CharacterList';

export default class FuturamaCharacters extends Component {
  state = {
    characters: [],
    loading: true,
  };

  render() {
    const { characters, loading } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return <CharacterList characters={characters} />;
  }
}
