// const User = {
//     name: "Shikhar",
//     age: 20,
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// createUser({name: "Shikhar", isPaid: true});

// function createCourse():{name: string, price: number}{
//     return {name: "React", price: 100}
// }
// //Here the function have 3 brackets, first one is for the function, second one is for the object and third one is for the return type of the object

// export{}

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);