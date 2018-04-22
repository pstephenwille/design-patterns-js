import { ConcreteOffCommand } from './ConcreteOffCommand';
import { ConcreteOnCommand } from './ConcreteOnCommand';
import { Invoker } from './Invoker';
import { Reciever } from './Reciever';

/*
 * Invoker, Command, and Receiver objects are held by a client object.
 *
 * The client decides which commands to execute at which points.
 * To execute Command, it passes the Command object to the invoker object.
 * */
export class Client {
    public invoker: Invoker = new Invoker();
    public onCommand: ConcreteOnCommand;
    public offCommand: ConcreteOffCommand;
    public client: Reciever = new Reciever();

    constructor() {
        this.onCommand = new ConcreteOnCommand(this.client);
        this.offCommand = new ConcreteOffCommand(this.client);
        this.invoker.setCommand(0, this.onCommand, this.offCommand);
        this.invoker.executeOnCommand(0);
        this.invoker.executeOffCommand(0);
        this.invoker.executeUndoCommand();
        this.invoker.getClientState();
        this.invoker.executeOffCommand(0);
        this.invoker.getClientState();
    }
}
