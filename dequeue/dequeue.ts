abstract class Dequeue {
    constructor() {}

    // Capacity
    abstract size();
    abstract max_size();
    abstract resize();
    abstract empty();
    abstract shrink_to_fit();

    // Element Access
    // operator[]
    abstract at();
    abstract front();
    abstract back();

    //Modifiers
    abstract assign();
    abstract push_back();
    abstract push_front();
    abstract pop_back();
    abstract pop_front();
    abstract insert();
    abstract erase();
    abstract swap();
    abstract clear();
    abstract emplace();
    abstract emplace_front();
    abstract emplace_back();
}