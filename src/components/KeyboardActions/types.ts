import { Url } from '../../types';

/** Specify the kind of action to trigger */
export type KeyboardAction = 'first' | 'last' | 'next' | 'previous';

/** Specify the destination of an action triggered by a keypress */
export type KeyboardTarget = Url;
