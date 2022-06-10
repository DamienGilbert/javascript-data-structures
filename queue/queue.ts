abstract class AbstractQueue<T> {
    protected abstract items: T[];
    constructor(items?: T[]){};

    abstract empty(): boolean;
    abstract size(): number;
    abstract front(): T;
    abstract back(): T;
    abstract push(val: T): void;
    abstract emplace(): void;
    abstract pop(): void;
    abstract swap(): void;
}

class Queue<T> extends AbstractQueue<T> {
    protected items: T[];
    constructor(items?: T[]) {
        super();
        if (items) {
            this.items = items;
        }
        else {
            this.items = [];
        }
    }

    empty(): boolean {
        return (this.items.length == 0) ? true : false;
    }

    size(): number {
        return this.items.length;
    }

    front(): T {
        return this.items.at(this.items.length - 1);
    }

    back(): T {
        return this.items.at(0);
    }

    push(val: T): void {
    }

    emplace(): void {
        throw new Error("Method not implemented.");
    }

    pop(): void {
        throw new Error("Method not implemented.");
    }

    swap(): void {
        throw new Error("Method not implemented.");
    }

}

abstract class PriorityQueue {
    constructor() {}

    abstract empty();
    abstract size();
    abstract top();
    abstract push();
    abstract emplace();
    abstract pop();
    abstract swap();
}