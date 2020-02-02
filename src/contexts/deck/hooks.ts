import { useContext } from 'react';
import { Deck, DeckDictionary } from '../../types';
import DeckContext from './context';

const ERROR_NO_DECK = 'Decks are not initialized yet.';
const ERROR_DECK_UNFOUND =
  'The requested deck does not exist or is not properly configured.';

/**
 * Returns the configuration for the requested deck
 *
 * @param deckSlug Slug of the requested deck
 */
export const useDeck = (deckSlug: string): Deck => {
  const decks = useContext(DeckContext);

  if (!decks) {
    throw new Error(ERROR_NO_DECK);
  }

  if (!Object.keys(decks).includes(deckSlug)) {
    throw new Error(ERROR_DECK_UNFOUND);
  }

  return decks[deckSlug];
};

/**
 * Returns the current state of the dictionary of Decks
 */
export const useDecks = (): DeckDictionary => {
  return useContext(DeckContext);
};
