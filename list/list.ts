abstract class List {
    constructor() {}

    // Capacity
    abstract empty();
    abstract size();
    abstract max_size();

    // Element Access
    abstract front();
    abstract back();

    // Modifiers
    abstract assign();
    abstract emplace_front();
    abstract push_front();
    abstract pop_front();
    abstract emplace_back();
    abstract push_back();
    abstract pop_back();
    abstract emplace();
    abstract insert();
    abstract erase();
    abstract swap();
    abstract resize();
    abstract clear();

    // Operations
    abstract splice();
    abstract remove();
    abstract remove_if();
    abstract unique();
    abstract merge();
    abstract sort();
    abstract reverse();
}