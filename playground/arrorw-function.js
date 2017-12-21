//Expression Syntax below
var square = (x) => x * x;
console.log(square(9));

//statement syntax
var square1 = (x) =>{
    var result = x *x;
    return result;
};

console.log(square1(4));

var user ={
    name: "Mark",
    sayHi: () => {
        console.log(arguments);// global arguments variable
        console.log(`Hi I'm  ${this.name}`); //this keyword only works on object literals, 

    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi I'm  ${this.name}`); // When you're creating functions on object literals you use this syntax so you can use the this keyword to bind 
    }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);