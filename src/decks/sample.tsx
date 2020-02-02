import React from 'react';
import { Deck } from '../types';

const SAMPLE_DECK: Deck = {
  title: 'Sample deck',
  slides: [
    {
      content: <>Title</>,
      title: 'Slide title',
      template: 'default',
    },
    {
      content: <>Content</>,
      title: 'Slide content',
      template: 'default',
    },
  ],
};

export default SAMPLE_DECK;
