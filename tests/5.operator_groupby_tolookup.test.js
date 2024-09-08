/*
----------------------------------------------------------------------------------
# group by
----------------------------------------------------------------------------------

IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 18 } ,
        new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
        new Student() { StudentID = 5, StudentName = "Abram" , Age = 21 } 
    };

var groupedResult = studentList.GroupBy(s => s.Age);

foreach (var ageGroup in groupedResult)
{
    Console.WriteLine("Age Group: {0}", ageGroup.Key);  //Each group has a key 
             
    foreach(Student s in ageGroup)  //Each group has a inner collection  
        Console.WriteLine("Student Name: {0}", s.StudentName);
}
----------------------------------------------------------------------------------
# To lookup
----------------------------------------------------------------------------------
var lookupResult = studentList.ToLookup(s => s.age);

foreach (var group in lookupResult)
{
    Console.WriteLine("Age Group: {0}", group.Key);  //Each group has a key 
             
    foreach(Student s in group)  //Each group has a inner collection  
        Console.WriteLine("Student Name: {0}", s.StudentName);
}

*/

require("../linq")


describe("operator groupby and tolookup", function () {
    var data = [
        { StudentID: 1, StudentName: "John", Age: 18 },
        { StudentID: 2, StudentName: "Steve", Age: 21 },
        { StudentID: 3, StudentName: "Bill", Age: 18 },
        { StudentID: 4, StudentName: "Ram", Age: 20 },
        { StudentID: 5, StudentName: "Abram", Age: 21 },
    ];

    it("should group by age", function () {
        var result = data.groupBy((e) => e.Age);
        console.log(result);
        var expected = {
            18: [
                {"Age": 18, "StudentID": 1, "StudentName": "John"}, 
                {"Age": 18, "StudentID": 3, "StudentName": "Bill"}
            ], 
            20: [
                {"Age": 20, "StudentID": 4, "StudentName": "Ram"}
            ], 
            21: [
                {"Age": 21, "StudentID": 2, "StudentName": "Steve"}, 
                {"Age": 21, "StudentID": 5, "StudentName": "Abram"}
            ]}
        expect(result).toStrictEqual(expected);       
    });

    it("should lookup by age", function () {
        var result = data.toLookup((e) => e.Age);
        console.log(result);
        var expected = {
            18: [
                {"Age": 18, "StudentID": 1, "StudentName": "John"}, 
                {"Age": 18, "StudentID": 3, "StudentName": "Bill"}
            ], 
            20: [
                {"Age": 20, "StudentID": 4, "StudentName": "Ram"}
            ], 
            21: [
                {"Age": 21, "StudentID": 2, "StudentName": "Steve"}, 
                {"Age": 21, "StudentID": 5, "StudentName": "Abram"}
            ]}
        expect(result).toStrictEqual(expected);       
    });
});

// Import the functions (if they are in another file)
// const { groupBy, toLookup } = require('./path-to-your-file');

describe('groupBy and toLookup functions', () => {
    const studentList = [
        { FirstName: 'John', Age: 18 },
        { FirstName: 'Alice', Age: 22 },
        { FirstName: 'Bob', Age: 20 },
        { FirstName: 'Alice', Age: 19 }
    ];

    test('groupBy should group by FirstName', () => {
        const result = studentList.groupBy(student => student.FirstName);

        expect(result).toEqual({
            "John": [{ FirstName: 'John', Age: 18 }],
            "Alice": [
                { FirstName: 'Alice', Age: 22 },
                { FirstName: 'Alice', Age: 19 }
            ],
            "Bob": [{ FirstName: 'Bob', Age: 20 }]
        });
    });

    test('toLookup should group by FirstName', () => {
        const result = studentList.toLookup(student => student.FirstName);

        expect(result).toEqual({
            "John": [{ FirstName: 'John', Age: 18 }],
            "Alice": [
                { FirstName: 'Alice', Age: 22 },
                { FirstName: 'Alice', Age: 19 }
            ],
            "Bob": [{ FirstName: 'Bob', Age: 20 }]
        });
    });

    test('groupBy should return an empty object for an empty array', () => {
        const result = [].groupBy(student => student.FirstName);
        expect(result).toEqual({});
    });
    
    test('toLookup should return an empty object for an empty array', () => {
        const result = [].toLookup(student => student.FirstName);
        expect(result).toEqual({});
    });
});

/*
-------------------------------------------------------------------------------------
# Distinct
-------------------------------------------------------------------------------------

IList<Student> studentList = new List<Student>() { 
        new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
        new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
        new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 } 
    };


var distinctStudents = studentList.Distinct(new StudentComparer()); 

foreach(Student std in distinctStudents)
    Console.WriteLine(std.StudentName);

*/

describe("operator distinct", function () {
    var data = [
        { StudentID: 1, StudentName: "John", Age: 18 },
        { StudentID: 2, StudentName: "Steve", Age: 15 },
        { StudentID: 3, StudentName: "Bill", Age: 25 },
        { StudentID: 3, StudentName: "Bill", Age: 25 },
        { StudentID: 3, StudentName: "Bill", Age: 25 },
        { StudentID: 3, StudentName: "Bill", Age: 25 },
        { StudentID: 5, StudentName: "Ron", Age: 19 }
    ];

    it("should return distinct students", function () {
        var result = data.distinct((e) => e.StudentID);
        console.log(result);
        var expected = [
            { StudentID: 1, StudentName: "John", Age: 18 },
            { StudentID: 2, StudentName: "Steve", Age: 15 },
            { StudentID: 3, StudentName: "Bill", Age: 25 },
            { StudentID: 5, StudentName: "Ron", Age: 19 }
        ]
        expect(result).toStrictEqual(expected);       
    });
});

