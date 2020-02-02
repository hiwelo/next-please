import React from 'react';
import fs from 'fs';
import path from 'path';
import util from 'util';
import { NextPage } from 'next';
import { DeckDictionary, NextPleasePageProps } from '../types';
import { asyncForEach } from '../utilities';
import { useDecks } from '../contexts/deck';
import { DeckList } from '../components';

interface StartScreenProps extends NextPleasePageProps {
  decks?: DeckDictionary;
}

const StartScreen: NextPage<StartScreenProps> = ({
  decks: initialDecks,
  updateDecks,
}) => {
  const decks = useDecks();
  if (!Object.keys(decks).length && decks) updateDecks(initialDecks);

  return <DeckList decks={decks} />;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
StartScreen.getInitialProps = async () => {
  const readdir = util.promisify(fs.readdir);
  const deckFolder = path.join(process.cwd(), './src/decks');
  const deckFiles = await readdir(deckFolder);
  const decks: DeckDictionary = {};

  await asyncForEach(
    deckFiles,
    async (deckSlug): Promise<void> => {
      try {
        const deckConfig = await import(`../decks/${deckSlug}/config.json`);

        decks[deckSlug] = deckConfig;
        // eslint-disable-next-line no-empty
      } catch {}
    },
  );

  return {
    decks,
  };
};

export default StartScreen;
