import React, { FunctionComponent, useState } from 'react';
import { AppProps } from 'next/app';
import DeckContext from '../contexts/deck';
import { DeckDictionary } from '../types';

const NextPleaseApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => {
  const [decks, setDecks] = useState<DeckDictionary>({});

  return (
    <DeckContext.Provider value={decks}>
      <Component updateDecks={setDecks} {...pageProps} />
    </DeckContext.Provider>
  );
};

export default NextPleaseApp;
