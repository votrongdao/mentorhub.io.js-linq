/*
test min, max, sum, average, all, any, contains, elementAt, elementAtOrDefault
*/

require("../linq")

describe("min, max, sum, average, all, any, contains, elementAt, elementAtOrDefault", function () {
    var data = [
        { name: "John", age: 25 },
        { name: "Jane", age: 22 },
        { name: "Jack", age: 30 },
        { name: "Jill", age: 27 },
    ];

    it("should return the sum of all ages", function () {
        var result = data.sum((e) => e.age);
        expect(result).toBe(104);
    });

    it("should return the sum of all ages with selector", function () {
        var result = data.sum((e) => e.age * 2);
        expect(result).toBe(208);
    });

    it("should return the sum of all ages with selector and seed", function () {
        var result = data.sum((e) => e.age);
        expect(result).toBe(104);
    });

    it("should return max and min", function () {
        var result = data.min((e) => e.age);
        expect(result).toBe(22);

        result = data.max((e) => e.age);
        expect(result).toBe(30);
    });

    it("should return average", function () {
        var result = data.average((e) => e.age);
        expect(result).toBe(26);
    });

    it("should return true if all items meet the condition", function () {
        var result = data.all((e) => e.age > 20);
        expect(result).toBe(true);

        result = data.all((e) => e.age > 25);
        expect(result).toBe(false);
    });

    it("should return true if any item meets the condition", function () {
        var result = data.any((e) => e.age > 20);
        expect(result).toBe(true);

        result = data.any((e) => e.age > 30);
        expect(result).toBe(false);
    });

    it("should return true if the item is in the array", function () {
        var result = data.contains(data[0]);
        expect(result).toBe(true);

        result = data.contains({ name: "John", age: 25 });
        expect(result).toBe(false);
    });

    it("should return the element at the index", function () {
        var result = data.elementAt(2);
        expect(result).toEqual({ name: "Jack", age: 30 });
    });
}
);
