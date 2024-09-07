/*
 Student[] studentArray = { 
            new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 } ,
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  } ,
        };

        Student[] students = StudentExtension.where(studentArray, delegate(Student std){
                return std.Age > 12 && std.Age < 20;
            });
        }
*/

require("../linq");

describe("List of students with conditions and count functions", () => {
    const students = [
        { StudentID: 1, StudentName: "John", Age: 18 },
        { StudentID: 2, StudentName: "Steve", Age: 21 },
        { StudentID: 3, StudentName: "Bill", Age: 25 },
        { StudentID: 4, StudentName: "Ram", Age: 20 },
        { StudentID: 5, StudentName: "Ron", Age: 31 },
        { StudentID: 6, StudentName: "Chris", Age: 17 },
        { StudentID: 7, StudentName: "Rob", Age: 19 }
    ];

    it("using where should return number of students whose age is between 12 and 20", () => {
        const result = students.where(std => std.Age > 12 && std.Age < 20);
        
        expect(3).toEqual(result.count());
    });

    it("Count number òf students whose age is between 12 and 20", () => {
        const result = students.count(std => std.Age > 12 && std.Age < 20);        
        expect(3).toEqual(result);
    });

    it("Should return student Id have age is bigger 20  ", () => {
        const result = students
            .first(std => std.Age > 20)            
        expect(2).toEqual(result.StudentID);
    });

    it("Should return student Id have age is bigger 20  ", () => {
        const result = students
            .where(std => std.Age > 20)
            .select(std => std.StudentID)
            .first();
        expect(2).toEqual(result);
    });
});