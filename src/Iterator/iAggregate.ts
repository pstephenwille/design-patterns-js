import { Iterator } from './iIterator';

export interface Aggregate {
    // build list of contexts
    createIterator(): Iterator;
}
