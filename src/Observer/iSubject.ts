import { IObserver } from './iObserver';

export interface ISubject {
    registerObserver(obs: IObserver): void;

    removeObserver(obs: IObserver): void;

    notifyObservers(): void;

}
