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

    Array.prototype.orderBy = function (selector) {
        return this.sort((a, b) => {
            return selector(a) > selector(b) ? 1 : -1;
        });
    };

    Array.prototype.orderByDescending = function (selector) {
        return this.sort((a, b) => {
            return selector(a) < selector(b) ? 1 : -1;
        });
    };

    Array.prototype.ofType = function (type) {
        return this.filter(function (item) {
            if (type === null) {
                return item === null;
            }
            if (type === undefined) {
                return typeof item === 'undefined';
            }
            if (type === Array) {
                return Array.isArray(item);
            }
            if (type === Object && typeof item === 'object' && item !== null && !Array.isArray(item)) {
                // Handle plain objects
                return item.constructor === Object;
            }
            if (typeof type === 'function') {
                return item instanceof type || typeof item === type.name.toLowerCase();
            }
            return false;
        });
    };

})();

// String extensions

(function () {
    String.prototype.contains = function () {
        return this.indexOf(arguments[0]) !== -1;
    };
})();
