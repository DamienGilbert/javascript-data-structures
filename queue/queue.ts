abstract class Queue {
    constructor(){};

    abstract empty();
    abstract size();
    abstract front();
    abstract back();
    abstract push();
    abstract emplace();
    abstract pop();
}