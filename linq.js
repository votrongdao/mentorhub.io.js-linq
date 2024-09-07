// Array extensions
(function () {
    Array.prototype.where = function (predicate) {
        return this.filter(predicate);
    };

    Array.prototype.count = function (predicate = null) {
        //if predicate is not null, return the length of the filtered array
        if (predicate) return this.where(predicate).length;
        return this.length;
    };

    Array.prototype.first = function (predicate = null) {
        //if predicate is not null, return the first element that satisfies the predicate
        if (predicate) return this.find(predicate);
        return this.length > 0 ? this[0] : undefined;
    };

    Array.prototype.select = function (selector) {
        return this.map(selector);
    };
})();

// String extensions

(function () {
    String.prototype.contains = function () {
        return this.indexOf(arguments[0]) !== -1;
    };
})();
