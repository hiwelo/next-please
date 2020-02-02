import { createContext } from 'react';
import { DeckDictionary } from '../../types';

export default createContext<DeckDictionary | undefined>(undefined);
