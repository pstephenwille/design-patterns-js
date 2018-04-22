import { ConcreteObserver } from './ConcreteObserver';
import { IObserver } from './iObserver';
import { ISubject } from './iSubject';

export class ConcreteSubject implements ISubject {
    private changed = false;
    private state = '';
    private observerList: IObserver[] = [];

    public registerObserver(observer: IObserver): void {
        if (observer === null) { return; }
        const notInList: boolean = this.observerList.every((obj) => obj.getId() !== observer.getId());

        if (notInList) {
            this.observerList.push(observer as ConcreteObserver);
        }
    }

    public removeObserver(observer: IObserver): void {
        const newList: IObserver[] = [];

        this.observerList.forEach((obs) => {
            if (obs.getId() !== observer.getId()) {
                newList.push(obs);
            }
        });

        this.observerList = newList;
    }

    public removeAllObservers(): void {
        this.observerList.length = 0;
    }

    public notifyObservers(): void {
        this.state = 'new state';
        console.log('...notify observers ', this.observerList.length);
        this.observerList.forEach((obs) => obs.update(this.state));
    }

    public hasChanged(): boolean {
        return this.changed;
    }

    public countObservers(): number {
        return this.observerList.length;
    }

    protected setChangedToTrue(): void {
        this.changed = true;
    }

    protected setChangedToFalse(): void {
        this.changed = false;
    }
}

