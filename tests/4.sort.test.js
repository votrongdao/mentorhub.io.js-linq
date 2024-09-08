/*
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
};

var orderByResult = from s in studentList
                   orderby s.StudentName 
                   select s;

var orderByDescendingResult = from s in studentList
                   orderby s.StudentName descending
                   select s;
 */

require("../linq");

describe("Linq sort ASC and DESC operation", () => {
  const students = [
    { StudentID: 1, StudentName: "John", Age: 18 },
    { StudentID: 2, StudentName: "Chris", Age: 21 },
    { StudentID: 3, StudentName: "Bill", Age: 25 },
    { StudentID: 4, StudentName: "Ram", Age: 42 },
    { StudentID: 5, StudentName: "Alex", Age: 31 },
    { StudentID: 6, StudentName: "Chris", Age: 17 },
    { StudentID: 7, StudentName: "Rob", Age: 19 },
  ];
  test("sort ascending by name", () => {
    const sortedStudents = students.orderBy(e => e.StudentName);
    const result = sortedStudents.first();
    expect({"Age": 31, "StudentID": 5, "StudentName": "Alex"}).toEqual(result);
  });

  test("sort descending by age", () => {
    const sortedStudents = students.orderByDescending(e => e.Age);
    const result = sortedStudents.first();
    expect({ StudentID: 4, StudentName: "Ram", Age: 42 }).toEqual(result);
  });

  test("sort ascending by name, then sort ascending by age ", () => {
    const studentList = [
        { FirstName: 'Alice', Age: 22 },
        { FirstName: 'Bob', Age: 20 },
        { FirstName: 'Alice', Age: 19 }
    ];
    
    // First, sort by FirstName, then by Age
    const sortedList = studentList.sortBy(e => e.FirstName).thenBy(e => e.Age);
    
    expected = [{"Age": 19, "FirstName": "Alice"}, {"Age": 22, "FirstName": "Alice"}, {"Age": 20, "FirstName": "Bob"}];
    expect(expected).toEqual(sortedList);
  });

  test("sort descending by name, then sort ascending by age", () => {
    const studentList = [
        { FirstName: 'Alice', Age: 22 },
        { FirstName: 'Bob', Age: 20 },
        { FirstName: 'Alice', Age: 19 }
    ];
    
    // First, sort by FirstName, then by Age
    const sortedList = studentList.sortBy(e => e.FirstName).thenByDescending(e => e.Age);
    
    expected = [{"Age": 22, "FirstName": "Alice"}, {"Age": 19, "FirstName": "Alice"}, {"Age": 20, "FirstName": "Bob"}];
    expect(expected).toEqual(sortedList);
  });
});
