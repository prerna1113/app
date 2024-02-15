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