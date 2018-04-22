export class Context {
    private field1: string;
    private field2: string;

    constructor(field1: string, field2: string) {
        this.field1 = field1;
        this.field2 = field2;
    }

    public getField1(): string {
        return this.field1;
    }

    public getField2(): string {
        return this.field2;
    }

}
