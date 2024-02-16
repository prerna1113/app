function Person(){
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "steve"
person1.lastName = "jobs";

console.log(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Prerna";
person2.lastName = "Kumari";
console.log(person2.firstName + " " + person2.lastName);


function Obj(){
    this.name="unknown";
    this.age ="unknown";
    this.gender="unknown";


}

var Obj1 = new Obj();
Obj1.name="Faizan Wani"
Obj1.age=25
Obj1.gender="Male";

console.log(Obj1.name,Obj1.age,Obj1.gender);

var Obj2 = new Obj();
Obj2.name ='Abhishek';
Obj2.gender="male";
Obj2.age=21

console.log(Obj2.name,Obj2.age,Obj2.gender)