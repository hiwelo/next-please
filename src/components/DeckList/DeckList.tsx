import React, { FunctionComponent } from 'react';
import { DeckDictionary } from '../../types';

interface DeckListProps {
  decks: DeckDictionary;
}

const DeckList: FunctionComponent<DeckListProps> = ({ decks }) => {
  return (
    <ul>
      {Object.entries(decks).map(([key, deck]) => (
        <li key={key}>{deck.title}</li>
      ))}
    </ul>
  );
};

export default DeckList;
