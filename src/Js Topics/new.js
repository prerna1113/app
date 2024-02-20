

function MyFunc(){
    var myVar = 1;
    this.x = 100;
}
MyFunc.prototype.y = 200;
var obj1 = new MyFunc();
console.log(obj1);
console.log(obj1.y);

//when we create an object (instance ) of MyFunc() using new keyword.
//first of all new keyword creates an empty object ={};
//2nd its set's invisible 'prototype' property(or attribute) of this empty
//object to MyFunc's prototype property
//as we can see, we have assigned new property 'y' using MyFunc.prototye.y
//so new empty object will also have same prototype property as MyFunc which includes property
//3rd step,it binds all the properties and function declared with this keyword to new empty object
//in 4th it will return this newly created object