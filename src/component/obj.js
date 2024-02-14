

//creating obj using the object literal syntax 

var p1 = {name :'Steve'};

// creating obj using the object() constructor function

var p2 = new Object();
p2.name = 'Steve';

var person ={
    firstName :'John',
    lastName:'Smith',
    age:'16',
    getFullName : function(){
        return console.log("Hello " + this.firstName + ' ' + this.lastName);
    }
}

person.getFullName();
console.log(p2.name);

if(person.hasOwnProperty('name')){
   console.log(person.name) 
}


