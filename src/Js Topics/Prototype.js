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



