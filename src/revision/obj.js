
//obj can be created in two ways

//obj literal syntax

var person = {
    lastName:'Doe'
}

//object constructor function

var p1 = new Object();
p1.name='john Doe';
p1.address = function(){
    console.log(p1.name);
}
p1.address();

for (var prop in p1){
    console.log(p1[prop]);
}

var person1 ={
    address:{
        id:1,
        country:'india'
    }
}
console.log(person1.address);