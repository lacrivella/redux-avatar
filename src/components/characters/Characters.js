import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character character={character} />
    </li>
  ));
  return (
    <ul>
      {characterElements}
    </ul>
  )
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string
  })).isRequired
};

export default Characters;
