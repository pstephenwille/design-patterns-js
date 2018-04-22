export interface IObserver {
    update(state: string): void;

    getId(): string;
}
