import fs from 'fs';
import path from 'path';
import util from 'util';
import { NextPage } from 'next';
import { DeckDictionary } from '../types';
import { asyncForEach } from '../utilities';

interface StartScreenProps {
  decks?: DeckDictionary;
}

const StartScreen: NextPage<StartScreenProps> = ({ decks }) => {
  console.log(decks);

  return null;
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
