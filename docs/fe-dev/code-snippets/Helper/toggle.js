"use strict";
exports.__esModule = true;
var ToggleHelper = /** @class */ (function () {
    function ToggleHelper(state) {
        this.state = state;
    }
    ToggleHelper.prototype.on = function () {
        this.state = true;
    };
    ToggleHelper.prototype.off = function () {
        this.state = false;
    };
    Object.defineProperty(ToggleHelper.prototype, "isOn", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    ToggleHelper.create = function (state) {
        return new ToggleHelper(state);
    };
    return ToggleHelper;
}());
exports.ToggleHelper = ToggleHelper;
