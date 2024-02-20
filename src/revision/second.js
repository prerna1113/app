//obj can be created in two ways:
//1.obj literal syntax
//2.object constructor function

//obj literal syntax




//obj constructor Function

var Person = new Object();
Person.name= "Prerna";
Person.caste = "Bhumihar";
Person.Love="Family";
Person.ShowLove = function(){
   return this.name
}

console.log(Person.ShowLove());


for (var prop in Person){
    console.log(prop)
}

//Classes 
//so ecmascript doesn't have classes type but we can create function in js in such a way that
//it will act as a class

// function can be used like a class in js

function Person1(){
    this.name ="Unknown";
    this.age="Unknown";
    this.gender="Unknown";
}

var Person2 = new Person1();
Person2.name ="Faizan";
Person2.age ="26";
Person2.gender="Male";

console.log(Person2.name,Person2.age,Person2.gender);


//add methods in a class

function AddMethod(){
    this.name ="unknown";
    this.add ="unknown";
    this.showFunction = function(){
        return this.name +" "+this.add;
    }
}

var addMethod = new AddMethod();
addMethod.name = "class";
addMethod.add = "Method";

console.log(addMethod.showFunction());

//Property descriptor
// in js each property of an object has property descriptor which describes
//the nature of the property
//property descriptor for a particular object's property can be retrives using 
//Object.getOwnPropertyDescriptor() method

var person = {
    firstName:'John',
    lastName:'Smith',
    getFullName: function(){
        return person.firstName + ' '+person.lastName;
    }
}

console.log(person.getFullName());

function Student(){
    this.name = "John";
    this.gender = "Male";
    this.SayHi= function(){
        console.log("Hi Mr." + this.name);
    }
}
var student1 = new Student();
console.log(Object.getOwnPropertyDescriptor(Person2,"name"));



//Object.defineProperty()

//This method defines a new property on the specified object or modifies an existing property
//or property descriptor

function Student2(){
    this.name = "Steve";
    this.gender = "female";
}

var Student3 = new Student2();
Object.defineProperty(Student3,'name',{writable:false})

try{
    Student3.name = "James";
    console.log(Student3.name);
}
catch(ex){
    console.log(ex.message);
}



