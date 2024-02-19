

var myVar = 100;

function WhoIsThis(){
    var myVar =200;
console.log( myVar =+myVar)
 console.log(this.myVar)
} 

WhoIsThis();

// var obj = new WhoIsThis();
// console.log(obj.myVar);