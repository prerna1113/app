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
