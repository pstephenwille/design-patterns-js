import { Aggregate } from './iAggregate';
import { Iterator } from './iIterator';

export class Client {
    private aggregate: Aggregate;
    private iterator: Iterator;

    constructor(aggregate: Aggregate) {

        this.aggregate = aggregate;
        this.iterator = this.aggregate.createIterator();
        this.iterateOverContexts(this.iterator);
    }

    public iterateOverContexts(iterator: Iterator): void {
        while (iterator.hasNext()) {
            this.iterator.next();
        }
    }
}
