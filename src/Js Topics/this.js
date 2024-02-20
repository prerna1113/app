

//  This Keyword

// this points to particular Object now which is that object is depends on how a
// function which includes 'this' keyword is being called
// The 'this' keyword in js is a special keyword that refers to the object that is currently executing
// the function 

// its value is determined by how a function is called not where it is defined

//the primary use cases for 'this' includes

//1.implicit Binding:- when a function is callled as a method of an object ,'this'
//refres to the object itself

const obj ={
    name:'john',
    sayName:function(){
        console.log(this.name);
    }
};
obj.sayName();

//2.Explicit Binding:- we can explicitly set the value of 'this'
//using 'call' ,'apply' ,'bind' methods

function greet(){
    console.log(`Hello,${this.name}`);
}
const person = {name:'Alice'};
greet.call(person);

//3.constructor function:- when a function is used as a constructor 
//with the'new'  keyword, 'this' refres to the newly created object

function Person (name){
    this.name = name;
}
const John = new Person('John');
console.log(John.name);

//4.global object:-in the global scope(outside of any function)
//this refres to the global object('window in browser 'global' in Node.js);


 