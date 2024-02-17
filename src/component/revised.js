               //OBJECT

//using object literal syntax

var person = {
    firstName:'John'
}

//using object constructor function 

var person = new Object();
person.name = 'steve';
console.log(person.name);

//object with single method

var p1 = {
    showFullName: function(val){
        alert(val);
        
    }
}
console.log(p1.showFullName);


//Object with properties and methods
var Person = {
    firstName:'Komal ',
    lastName:'Kumari',
    age: 23,
    getFullName : function(){
        console.log(this.firstName +" "+this.lastName);
    }
};

Person.getFullName();

//objects created using object() constructor function

var p2 = new Object();
p2.name ='sifra';
p2.age = 34;
p2.myFunc= function(){
    console.log(this.age);
}
p2.myFunc();


//enumerate object's properties
for(var prop in p2){
    console.log(prop);
    
}

//pass by refrence 
function changeFirstName(per){
    per.firstName = 'steve';
}

var p3 = {firstName:'john'};

changeFirstName(p3);
console.log(p3.firstName);

//Nested Objects
var person1 ={
    greet:'Hello',
firstName:'Johnny',
address:{id:'1',
country:'Uk'
}
   

}
console.log(person1.address);







