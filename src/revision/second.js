//obj can be created in two ways:
//1.obj literal syntax
//2.object constructor function

//obj literal syntax

var person = {
    firstName:'John',
    lastName:'Smith',
    getFullName: function(){
        return person.firstName + ' '+person.lastName;
    }
}

console.log(person.getFullName());


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




