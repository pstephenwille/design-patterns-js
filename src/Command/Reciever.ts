// receiver of requests of commands to perform

/*
* The receiver then does the work when the execute() method in Command is called.
* */
export class Reciever {
    private state = '';

    public on(): void {
        this.state = 'on';
    }

    public off(): void {
        this.state = 'off';
    }

    public getState(): string {
        return this.state;
    }
}
