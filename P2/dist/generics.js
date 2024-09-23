"use strict";
//What are generics?
//Generics are reusable components that can work with a variety of types rather than a single one.
const score = [];
const names = [];
function identityOne(value) {
    return value;
}
function identityTwo(value) {
    //Here we are using any type which is not a good practice
    //for example we can pass a string and get a number
    return value;
}
function identityThree(value) {
    //Here we are using generics to make sure that the return type is same as the input type
    return value;
}
identityThree(5);
function identityFour(value) {
    //Here we are using generics to make sure that the return type is same as the input type
    return value;
}
//Generics with arrays
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentityTwo(arg) {
    console.log(arg.length);
    return arg;
}
//Generics with multiple types
function identityFive(value, message) {
    console.log(message);
    return value;
}
identityFour({ brand: 'Coca Cola', type: 1 });
