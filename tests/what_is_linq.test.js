/*
What is linq?

string[] names = {"Bill", "Steve", "James", "Mohan" };

// LINQ Query 
var myLinqQuery = from name in names
                where name.Contains('a')
                select name;

https://www.tutorialsteacher.com/linq/what-is-linq

*/
require("../linq")

describe("where", function () {
  var data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jack", age: 30 },
    { name: "Jill", age: 27 },
  ];

  it("should return an array of items that meet the condition", function () {
    var result = data.where((e) => e.age >= 25);
    expect(result.length).toBe(3);
    expect(result[0].name).toBe("John");
    expect(result[1].name).toBe("Jack");
    expect(result[2].name).toBe("Jill");
  });

  it("should return items that meet string condition", function () {      
    var result = data.where((e) => e.name.contains("J"));
    expect(result.length).toBe(4);
    expect(result[0].name).toBe("John");
    expect(result[1].name).toBe("Jane");
  });
});
