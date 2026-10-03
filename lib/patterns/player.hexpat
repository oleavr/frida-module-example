#pragma abi native

struct Player {
    u32 health;
    u32 lives;
    Vec3 position;
};

struct Vec3 {
    float x;
    float y;
    float z;
};
