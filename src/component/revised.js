

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

