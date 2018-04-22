import { Command } from './Command';
import { Reciever } from './Reciever';

/*
* A Command object knows about receiver and invokes a method of the receiver.
* */
export class ConcreteOffCommand implements Command {
    private client: Reciever;

    constructor(client: Reciever) {
        this.client = client;
    }

    public execute(): void {
        this.client.off();
        console.log('....execute off Command');
    }

    public undo() {
        this.client.on();
        console.log('...execute undo off Command');
    }

    public getState(): void {
        console.log('...client state ', this.client.getState());
    }
}

