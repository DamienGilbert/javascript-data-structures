abstract class Vector {
    constructor() {}

    // Capacity
    abstract size();
    abstract max_size();
    abstract resize();
    abstract capacity();
    abstract empty();
    abstract reserve();
    abstract shrink_to_fit();

    // Element Access
    // operator[]
    abstract at();
    abstract front();
    abstract back();
    abstract data();

    // Modifiers
    abstract assign();
    abstract push_back();
    abstract pop_back();
    abstract insert();
    abstract erase();
    abstract swap();
    abstract clear();
    abstract emplace();
    abstract emplace_back();
}