//What are generics?
//Generics are reusable components that can work with a variety of types rather than a single one.

const score: Array<number> = []
const names: Array<string> = []

function identityOne(value: number| boolean): number| boolean {
    return value
}

function identityTwo(value: any): any {
    //Here we are using any type which is not a good practice
    //for example we can pass a string and get a number
    return value
}

function identityThree<Type>(value: Type): Type {
    //Here we are using generics to make sure that the return type is same as the input type
    return value
}

identityThree<number>(5)

function identityFour<T>(value: T): T {
    //Here we are using generics to make sure that the return type is same as the input type
    return value
}

//Generics with arrays
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
function loggingIdentityTwo<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}

//Generics with multiple types
function identityFive<T, U>(value: T, message: U): T {
    console.log(message)
    return value
}


//Generics with constraints
interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: 'Coca Cola', type: 1})