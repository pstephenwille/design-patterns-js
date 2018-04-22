import { Context } from './Context';

export interface Iterator {
    hasNext(): boolean;

    next(): Context | undefined;
}
