import { Dispatch, ReactNode, ReactText, SetStateAction } from 'react';
import { UrlObject } from 'url';

export type DeckDictionary = Record<string, Deck>;

/** Specify URLs for the NextJS Link component */
export type Url = string | UrlObject;

export interface Deck {
  /** Title of this deck */
  title: ReactText;
}

export interface NextPleasePageProps {
  updateDecks?: Dispatch<SetStateAction<DeckDictionary>>;
}

export interface Slide {
  /** Specify the content of the slide, provided as children to the template */
  content: ReactNode;
  /** Template to use for this slide */
  template: string;
  /** Title to use of this slide (mainly for SEO & HTMLTitleElement) */
  title?: ReactText;
}
