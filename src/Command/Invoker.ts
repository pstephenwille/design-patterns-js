import { Command } from './Command';
import { ConcreteOffCommand } from './ConcreteOffCommand';
import { ConcreteOnCommand } from './ConcreteOnCommand';

/*
* An invoker object knows how to execute a Command
* It knows only about the Command interface. */
export class Invoker {
    private onCommand: Command[];
    private offCommand: Command[];
    private undoCommand: any;
    private commandState: any;

    constructor() {
        this.onCommand = new Array(2);
        this.offCommand = new Array(2);
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommand[ slot ] = (onCommand as ConcreteOnCommand);
        this.offCommand[ slot ] = (offCommand as ConcreteOffCommand);
    }

    public executeOnCommand(slot: number): void {
        this.onCommand[ slot ].execute();
        this.undoCommand = this.onCommand[ slot ];
        this.commandState = this.onCommand[ slot ];
    }

    public executeOffCommand(slot: number): void {
        this.offCommand[ slot ].execute();
        this.undoCommand = this.offCommand[ slot ];
        this.commandState = this.offCommand[ slot ];
    }

    public executeUndoCommand(): void {
        this.undoCommand.undo();
    }

    public getClientState(): void {
        this.commandState.getState();
    }
}
