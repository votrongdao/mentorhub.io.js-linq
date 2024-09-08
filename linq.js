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
            if (selector(a) > selector(b)) return 1;
            if (selector(a) < selector(b)) return -1;
            return 0;
        });
    };

    Array.prototype.orderByDescending = function (selector) {
        return this.sort((a, b) => {
            if (selector(a) > selector(b)) return -1;
            if (selector(a) < selector(b)) return 1;
            return 0;
        });
    };

    // Helper function to handle comparisons
    // Helper function to handle comparisons
    function compareValues(keySelector, isDescending = false) {
        return (a, b) => {
            const aValue = keySelector(a);
            const bValue = keySelector(b);

            if (aValue < bValue) return isDescending ? 1 : -1;
            if (aValue > bValue) return isDescending ? -1 : 1;
            return 0;
        };
    }

    // Extending Array prototype for sortBy (equivalent to OrderBy)
    Array.prototype.sortBy = function (keySelector) {
        // Store initial sorting comparator in the array (for chaining with thenBy)
        this._sortComparators = [compareValues(keySelector)];
        return this.sort(this._sortComparators[0]);
    };

    // Extending Array prototype for thenBy (equivalent to ThenBy)
    Array.prototype.thenBy = function (keySelector) {
        // Add another comparator to the array of comparators
        const newComparator = compareValues(keySelector);
        this._sortComparators.push(newComparator);

        // Create a combined comparator that applies each comparator in sequence
        const combinedComparator = (a, b) => {
            for (let comparator of this._sortComparators) {
                const result = comparator(a, b);
                if (result !== 0) return result;
            }
            return 0;  // If all comparators result in equality
        };

        // Apply the combined comparator to sort the array
        return this.sort(combinedComparator).select(e=>e);
    };


    Array.prototype.thenByDescending = function (keySelector) {
        // Add another comparator to the array of comparators
        const newComparator = compareValues(keySelector, true);
        this._sortComparators.push(newComparator);

        // Create a combined comparator that applies each comparator in sequence
        const combinedComparator = (a, b) => {
            for (let comparator of this._sortComparators) {
                const result = comparator(a, b);
                if (result !== 0) return result;
            }
            return 0;  // If all comparators result in equality
        };

        // Apply the combined comparator to sort the array
        return this.sort(combinedComparator).select(e => e);

    };


    Array.prototype.OrderByDescending = function (selector) {
        return this.sort((a, b) => {
            if (selector(a) > selector(b)) return -1;
            if (selector(a) < selector(b)) return 1;
            return 0;
        });
    };

    //Array.prototype.ThenByDescending = function (keySelector) {
    //    return this.OrderByDescending(keySelector);
    //};

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
            if (typeof type === "function") {
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
