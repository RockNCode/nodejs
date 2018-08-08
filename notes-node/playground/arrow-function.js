console.log("Starting arrow-function.js ")

var square = (x) => x * x ;

var user = {
  name : "Alex",
  sayHi : () => {
    console.log("hi");
  },
  sayHiAlt () {
    console.log(arguments);
    console.log (`Hi, ${this.name}`);
  }

}

console.log(square(3));
user.sayHi();
user.sayHiAlt(1,2,3);
