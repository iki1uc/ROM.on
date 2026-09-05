// 9hoch9 / tmp.js

export const tmp = {
    lastPosition: null,
    lastAxes: null,
    lastMovement: null,
    lastOrbit: null
};

export function updateTmp(position, axes, movement, orbit) {
    tmp.lastPosition = position;
    tmp.lastAxes = axes;
    tmp.lastMovement = movement;
    tmp.lastOrbit = orbit;
}

