
//Closures

function OuterFunc(){
    var outerVariable = 10;
    function InnerFunc(){
        console.log(outerVariable);
    }
    InnerFunc();
}
OuterFunc();


var Counter = (function(){
    var privateCounter = 10;
    function ChangeBy(val){
        privateCounter += val;
    }
    return{
        increment:function(val){
            ChangeBy(1);
        },
        decrement:function(val){
            ChangeBy(-1);

        },
        value:function(val){
            return privateCounter;
        }
    }

})();

console.log(Counter.decrement(20));


