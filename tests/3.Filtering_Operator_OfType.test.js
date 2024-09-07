/*
IList mixedList = new ArrayList();
mixedList.Add(0);
mixedList.Add("One");
mixedList.Add("Two");
mixedList.Add(3);
mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

var stringResult = from s in mixedList.OfType<string>()
                select s;

var intResult = from s in mixedList.OfType<int>()
                select s;

*/
require("../linq");
require("../linq")
describe('Array.prototype.ofType', () => {
  function Student(id, name) {
    this.StudentID = id;
    this.StudentName = name;
  };
 
  test('filters strings from a mixed array', () => {
    const mixedList = [0, 'One', 'Two', 3, new Student(1, 'Bill')];
    const result = mixedList.ofType(String);
    expect(["One","Two"]).toEqual(result);
  });

  test('filters numbers from a mixed array', () => {
    const mixedList = [0, 'One', 2, 3, new Student(1, 'Bill')];
    const result = mixedList.ofType(Number);
    expect(result).toEqual([0, 2, 3]);
  });

  test('filters objects (Student instances) from a mixed array', () => {
    const mixedList = [0, 'One', 2, new Student(1, 'Bill'), new Student(2, 'John')];
    const result = mixedList.ofType(Student);
    expect(result).toEqual([new Student(1, 'Bill'), new Student(2, 'John')]);
  });

  test('filters null values from a mixed array', () => {
    const mixedList = [null, 'One', null, 2];
    const result = mixedList.ofType(null);
    expect(result).toEqual([null, null]);
  });

  test('filters arrays from a mixed array', () => {
    const mixedList = [[1, 2], 'One', [3, 4], 5];
    const result = mixedList.ofType(Array);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  test('filters undefined values from a mixed array', () => {
    const mixedList = [undefined, 'One', undefined, 2];
    const result = mixedList.ofType(undefined);
    expect(result).toEqual([undefined, undefined]);
  });
});