         

         //Prototype

//js is a dynamic language you can attach new properties to an object at any time

function Student(){
    this.name = 'Prerna';
    this.gender ="Female";
}

var studentobj1 = new Student();
studentobj1.age = 15;
console.log(studentobj1.name);
 
var studentobj2 = new Student();
console.log(studentobj2.gender);
console.log(studentobj2.age);     // undefined

// age property is attached to studentObj1 instance 
//however studobj2 instance will not have  the age property because
//it is defined only on studentObj1 instance.
//so we can use prototype if we want to add new properties at later stage of a function which
//will be shared across all the instances.
//Prototype is an object that is associated with every functions and objects by default 
//in js where function's prototype is accessible & modifiable and object's prototype 
//property is not visible 
//every functon includes prototype object by default
//the prototype object is special type of enumerable object to which additional properties can be 
//attached to it which will be shared across all the instances of it's constructor function


function student(){
    this.name = 'john';
    this.gender = 'M';
}
student.prototype.age = 15;
var studObj1 = new student();
console.log(studObj1.age);

var studObj2 = new student();
console.log(studObj2.age);
student.prototype = {age:'20'};
var studObj3 = new student();
console.log(studObj3.age);


//every obj which is created using literal syntax or constructor  syntax 
//with the new keyword includes _proto_ property that points to prototype object of a 
//function that created this object .



var studObj = new student();
var proto = Object.getPrototypeOf(studObj2);
console.log( "this is proto",proto.consturctor);



