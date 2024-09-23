"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
    //In the above line, we first cast the pet to Fish and then check if the swim property is defined. If it is defined, we return true, which means the pet is a Fish.
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'Fish Food';
    }
    else {
        pet;
        return 'Bird Food';
    }
}
