import { ConcreteObserver } from './ConcreteObserver';
import { ConcreteSubject } from './ConcreteSubject';

export class Main {
    private subj1: ConcreteSubject;
    private obs3: ConcreteObserver = new ConcreteObserver('three');

    constructor() {
        this.subj1 = new ConcreteSubject();
        this.subj1.registerObserver(new ConcreteObserver('one'));
        this.subj1.registerObserver(new ConcreteObserver('two'));
        this.subj1.registerObserver(this.obs3);
        this.subj1.notifyObservers();

        this.subj1.removeObserver(this.obs3);
        this.subj1.notifyObservers();
    }
}
