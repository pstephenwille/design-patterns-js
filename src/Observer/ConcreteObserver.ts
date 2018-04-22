import { IObserver } from './iObserver';

export class ConcreteObserver implements IObserver {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    public update(state: string): void {
        console.log('...observer update called id: ', this.getId(), ', state: ', state);
    }

    public getId(): string {
        return this.id;
    }

    public concretesMethod(): void {
        console.log('.......concrete method');
    }
}
