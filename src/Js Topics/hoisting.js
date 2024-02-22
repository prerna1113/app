
        //Hoisting 

//it is a concept in js ,not a feature 

// in other scripting or server side languages variables or functions must be declared 
//before using it .

// in js variable and function names can be used before declaring it .
//the js compiler moves all the top so that of  variable and functions at the top 
//so that ther will not be any error . this is called hositing.
 
    x=1;
    console.log(x);
    var x;

    k =1;
    l= k;
    console.log('k='+k);
    console.log('l='+l);
    var k;
    var l;

    //hoisting of function 
    console.log(Sum(5,5));

    function Sum(val1,val2){
        return val1 + val2;

    }
    console.log(Sub(8,10))

   function Sub(one,two){
    return two-one

   }