import { Aggregate } from './iAggregate';
import { Context } from './Context';
import { Iterator } from './iIterator';
import { ConcreteIterator } from './ConcreteIterator';

export class ConcreteAggregate implements Aggregate {

    private listOfContexts: Context[];

    constructor() {
        this.listOfContexts = [
            new Context('a1', 'a2'),
            new Context('b1', 'b3'),
            new Context('c1', 'c2') ];
    }

    public addContext(context: Context): void {
        this.listOfContexts.push(context);
    }

    public getAllContexts(): Context[] {
        return this.listOfContexts;
    }

    public createIterator(): Iterator {
        return new ConcreteIterator(this.listOfContexts);
    }
}
