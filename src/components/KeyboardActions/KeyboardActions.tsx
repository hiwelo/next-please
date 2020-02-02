import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import KeypressListener from '../KeypressListener';
import { KeyboardAction, KeyboardTarget } from './types';

interface KeyboardActions {
  /** Specify the actions to watch for */
  actions: {
    first?: KeyboardTarget;
    last?: KeyboardTarget;
    next?: KeyboardTarget;
    previous?: KeyboardTarget;
  };
}

const KEY_MAPPING: Record<KeyboardAction, string> = {
  first: 'Home',
  last: 'End',
  next: 'ArrowRight',
  previous: 'ArrowLeft',
};

/**
 * Mount and unmount a series of keystroke listeners used to navigate between
 * screens and slides
 */
const KeyboardActions: FunctionComponent<KeyboardActions> = ({ actions }) => {
  const router = useRouter();
  const requestedActions = Object.keys(actions) as KeyboardAction[];

  return (
    <>
      {requestedActions.map(action => (
        <KeypressListener
          key={action}
          keyName={KEY_MAPPING[action]}
          callback={(): void => {
            router.push(actions[action], actions[action]);
          }}
        />
      ))}
    </>
  );
};

export default KeyboardActions;
