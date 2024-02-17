

//CLASS

//ECMAScript doesn't have class type so it doesn't support full oop concept like other 
//progamming languages like java or c++
//but we can create a function in such a way that it will act as a class
//

function Person(){
    this.firstName = "unknown";
    this.lastName ="unknown";
    this.age ="unknown";
}

var person1 = new Person();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 34;

var person2 = new Person();
person2.firstName = "steve";
person2.title = "dubeyji";
console.log(person2.title);

console.log(person1.firstName + " " + person1.lastName)

//we can create an object of any function using the new keyword

//Add method in a class

function MyFunc(){
    this.name ="unknown";
    this.age ="unknown";
    this.getFullName = function(){
       return this.name + " "+this.age;
}
}

var func = new MyFunc();
func.name ="Prerna";
func.age = 23;
console.log(func.getFullName())

//retreive properties of an object
console.log(Object.keys(func));

//property Descriptor 
console.log(Object.getOwnPropertyDescriptor(func,'name'));


//Object.defineProperty
function Student(){
    this.name ="steve";
    this.gender="male";
}
var student1 = new Student();
Object.defineProperty(student1,'name',{Enumerable:false})

for(var prop in student1){
    console.log(prop);
}

try{
    student1.name  ="james";
    console.log(student1.name);
}
catch(ex){
    console.log(ex.message);
}

