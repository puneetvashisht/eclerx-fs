"use strict";
var default_1 = (function () {
    function default_1(name, age) {
        this.name = name;
        this.age = age;
        this.usedAccNums = {};
        this.accNum = this.getAvailableAccountNumber();
    }
    default_1.prototype.getAvailableAccountNumber = function () {
        var random = Math.floor(Math.random() * 1000);
        if (this.usedAccNums[random]) {
            this.getAvailableAccountNumber();
        }
        else {
            this.usedAccNums[random] = random;
            return random;
        }
    };
    default_1.prototype.getPrincipalAmount = function (amount, time, roi) {
        // code to get principalAmount
        return 0;
    };
    return default_1;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
