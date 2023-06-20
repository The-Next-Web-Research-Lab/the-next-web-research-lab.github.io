var LIMIT = {
    MIN_FLOOR: 2,
    MAX_FLOOR: 5,
    MIN_ELEVATOR: 2,
    MAX_ELEVATOR: 4
};

var ELEVATOR_SPEC = {
    MIN_FLOOR: 1,
    MAX_FLOOR: 5, //Set Max Floor
    ELEVATOR_LENGTH: 4, //Set Elevator Length
    SPEED: 1, // 1 floor/sec
    STANDARD_UNIT_TIME: 1000,
    STANDBY_TIME: 3000,
    STANDBY_TIME_CHECK_INTERVAL: 250,
};

var DIRECTIVE = {
    FLOOR_BTN: 'data-floor-btn',
    ELEVATOR: 'data-elevator-item',
    ELEVATOR_INDEX: 'data-elevator-index'
};

Object.freeze(LIMIT);
Object.freeze(ELEVATOR_SPEC);
Object.freeze(DIRECTIVE);