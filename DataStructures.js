/* DATA STRUCTURES 

    Data structures are collections of values, 
    the relationships among them, and the functions
    or operations that can be applied to the data
*/
// ES2015 CLASS SYNTAX
/* OBJECTIVE
1.  Explain what a class is
2.  Understand how JavaScript implements the idea of classes
3.  Define terms like abstraction, encapsulation and polymorphism
4.  Use ES2015 classes to implement data structures.

    // What is a class 
    A blueprint for creating objects with
     pre-defined properties and methods

    //  Why do we need to learn this 
    We're going to implement data structures as classes.
*/
    // THE SYNTAX
    class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
    // The method to create new objects must be called constructor

    // The class keyword creates a constant,
    // so you can not redefine it. 
    // Watch out for the syntax as well!

    // CREATING OBJECTS FROM CLASSES:
    // We use the new keyword

    // class Student {
    //     constructor(firstName, lastName){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    // }
    
    // let firstStudent = new Student("Anita", "Singh");
    // let secondStudent = new Student("Khushboo", "Singh");
    

    // INSTANCE METHOD
    // class Student {
    //     constructor(firstName, lastName){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    //     fullName(){
    //         return `Your full name is ${this.firstName} ${this.lastName}`;
    //     }
    // }
    
    // let firstStudent = new Student("Anita", "Singh");
    
    // firstStudent.fullName() // "Anita Singh"


    // CLASS METHODS
    class Student {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        fullName(){
            return `Your full name is ${this.firstName} ${this.lastName}`;
        }
        
        static enrollStudents(...students){
            // maybe send an email here
        }
    }
    
    let firstStudent = new Student("Colt", "Steele");
    let secondStudent = new Student("Blue", "Steele");
    
    Student.enrollStudents([firstStudent, secondStudent])

