class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._bottomBoundary = min;
        this._upperBoundary = max;
    }

    guess() {
        return Math.ceil((this._bottomBoundary + this._upperBoundary) / 2);
    }

    lower() {
        this._upperBoundary = this.guess();
    }

    greater() {
        this._bottomBoundary = this.guess();
    }
}

module.exports = GuessingGame;