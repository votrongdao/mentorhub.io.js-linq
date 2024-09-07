// Array extensions
(function () {
  Array.prototype.where = function (predicate) {
    return this.filter(predicate);
  };
})();

// String extensions

(function () {
  String.prototype.contains = function () {
    return this.indexOf(arguments[0]) !== -1;
  };
})();
