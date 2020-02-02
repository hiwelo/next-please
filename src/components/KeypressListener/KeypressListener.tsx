import { FunctionComponent, RefObject, useEffect } from 'react';

interface KeypressListenerProps {
  /** Callback to execute on keyUp event */
  callback(event: KeyboardEvent): void;
  /** Specify the keyCode to listen */
  keyName: string;
  /** Specify the target to attach the listener to */
  target?: RefObject<HTMLElement>;
}

/**
 * Mount and unmount a keyUp observer executing the provided callback for the
 * requested key
 */
const KeypressListener: FunctionComponent<KeypressListenerProps> = ({
  callback,
  keyName,
  target,
}) => {
  const eventHandler = (keyStroke: KeyboardEvent): void => {
    // early-termination if the key pressed is not the one we are observing
    if (keyStroke.key !== keyName) return;

    callback(keyStroke);
  };

  useEffect(() => {
    const eventTargetElement = target?.current || document;

    eventTargetElement.addEventListener('keyup', eventHandler);

    return (): void => {
      eventTargetElement.removeEventListener('keyup', eventHandler);
    };
  });

  return null;
};

export default KeypressListener;
