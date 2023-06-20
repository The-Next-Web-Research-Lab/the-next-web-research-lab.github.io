"use strict";
exports.__esModule = true;
var Stepper = /** @class */ (function () {
    function Stepper(min, max, step, position) {
        this.min = min;
        this.max = max;
        this.step = step;
        this.position = position;
    }
    Object.defineProperty(Stepper.prototype, "isMax", {
        get: function () {
            return this.position === this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stepper.prototype, "isMin", {
        get: function () {
            return this.position === this.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stepper.prototype, "currentPosition", {
        get: function () {
            return this.position;
        },
        enumerable: true,
        configurable: true
    });
    Stepper.prototype.next = function () {
        this.changePosition(this.position + this.step);
    };
    Stepper.prototype.prev = function () {
        this.changePosition(this.position - this.step);
    };
    Stepper.prototype.moveTo = function (position) {
        this.changePosition(position);
    };
    Stepper.prototype.changePosition = function (position) {
        this.position = this.calibratePosition(position);
    };
    Stepper.prototype.calibratePosition = function (position) {
        return position > this.max
            ? this.max
            : position < this.min
                ? this.min
                : position;
    };
    Stepper.create = function (max) {
        return new Stepper(1, max, 1, 1);
    };
    return Stepper;
}());
exports.Stepper = Stepper;
