function logValue(x:Date| string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

//The instanceof operator is used to check the type of an object at runtime. It can only be used where the new keyword is used.

type Fish = {
    swim: () => void;
}
type Brid = {
    fly: () => void;
}

function isFish(pet: Fish | Brid): pet is Fish {//Here we used "pet is Fish" to tell the compiler that the pet is of type Fish. This is called a type predicate.
    return (pet as Fish).swim !== undefined;
    //In the above line, we first cast the pet to Fish and then check if the swim property is defined. If it is defined, we return true, which means the pet is a Fish.
}

function getFood(pet: Fish | Brid){
    if(isFish(pet)){
        pet
        return 'Fish Food';
    }
    else{
        pet
        return 'Bird Food';
    }
}