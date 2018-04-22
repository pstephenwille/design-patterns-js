import { Command } from './Command';
import { Reciever } from './Reciever';

/*
* A Command object knows about receiver and invokes a method of the receiver.
* */
export class ConcreteOnCommand implements Command {
    private reciever: Reciever;

    constructor(reciever: Reciever) {
        this.reciever = reciever;
    }

    public execute(): void {
        this.reciever.on();
        console.log('....execute on Command');
    }

    public undo() {
        this.reciever.off();
        console.log('...undo on Command');
    }

    public getState(): void {
        console.log('...reciever state', this.reciever.getState());
    }

}
