import { Context } from './Context';
import { Iterator } from './iIterator';

export class ConcreteIterator implements Iterator {

    private listOfContexts: Context[];
    private position: number;

    constructor(list: Context[]) {
        this.listOfContexts = list;
        this.position = 0;
    }

    public hasNext(): boolean {
        return this.position < this.listOfContexts.length;
    }

    public next(): Context | undefined {
        if (this.hasNext()) {
            const context = this.listOfContexts[ this.position++ ];
            console.log('...concrete next ', context);

            return context;
        }

        return undefined;
    }
}
