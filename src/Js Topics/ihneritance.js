

//Inheritance


function Prerna(name,gender){
    this.Name = name || "unknown";
    this.Gender = gender || "unknown";

}
Prerna.prototype.getFull= function(){
    return this.Name +" "+ this.Gender;
}

function MyFunc(name,gender,school){
    Prerna.call(this,name,gender);
    this.SchoolName = school || 'unknown';

}

MyFunc.prototype = new Prerna();
MyFunc.prototype.constructor = MyFunc;


var myVar = new MyFunc("Peru","Female","XYZ");
console.log(myVar.getFull());


function Person(firstName,lastName){
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
}
Person.prototype.getFullName = function(){
    return this.FirstName +' '+this.LastName;
}

function Student(firstName,lastName,schoolName,grade){
    Person.call(this,firstName,lastName);
    this.SchoolName = schoolName || "unknown";
    this.Grade =grade || 0;

}
Student.prototype = new Person();
Student.prototype.constructor = Student;

var Std = new Student("James","Bond","XYZ",10);
console.log(Std.getFullName());


// in this code, the lines:
// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// are used to establish the inheritance relationship between the Student constructor 
// function and the Person constructor function.

// Let me break it down:

// Student.prototype = new Person();: This line sets the prototype of 
// the Student constructor function to be a new instance of the Person 
// constructor function. By doing this, any object created using the 
// Student constructor will inherit properties and methods from the 
// Person prototype chain. This allows instances of Student to access 
// methods defined in Person, such as getFullName().

// Student.prototype.constructor = Student;:
//  This line sets the constructor property of the Student
//   prototype object to point back to the Student constructor
//    function. This is necessary because when you set 
//    Student.prototype = new Person();, you're essentially
//     overwriting the original prototype object of Student, 
//     which had its constructor property pointing to Person. 
//     By resetting constructor to Student, you ensure that instances 
//     of Student correctly have their constructor set to Student.

// In summary, these lines of code establish the prototype 
// inheritance chain correctly, allowing Student objects to inherit
//  properties and methods from both the Student constructor function 
//  and the Person constructor function.



function ParentClass(firstName,middleName){
    this.Name = firstName || "unknown";
    this.MidName = middleName || "unknown";
}

ParentClass.prototype.getName = function(){
    return this.Name +" "+ this.MidName;
}
function DerivedClass(firstName,middleName,age){
    ParentClass.call(this,firstName,middleName);
    this.Age = age || "unknown";
}

DerivedClass.prototype = new ParentClass();
DerivedClass.prototype.constructor = DerivedClass;
var std2 = new DerivedClass("Prema","kumari","xyz");
console.log(std2.getName());