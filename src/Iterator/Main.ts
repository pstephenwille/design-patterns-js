import { ConcreteAggregate } from './ConcreteAggregate';
import { Client } from './Client';
import { Aggregate } from './iAggregate';

export class Main {

    public aggregate: Aggregate;
    public client: Client;

    constructor() {
        this.aggregate = new ConcreteAggregate();
        this.client = new Client(this.aggregate);
    }
}
