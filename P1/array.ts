//1
const superHeroes: string[] = []
//Now the array superHeroes can only have string values. If we try to add any other type of value to the array, it will throw an error. The string[] syntax is called a type annotation. It is used to specify the type of values that an array can have. In this case, the array can only have string values.

superHeroes.push("SpiderMan");

// superHeroes = [] // not allowed
//what is type never? it is used to represent the type of values that never occur. For example, a function that throws an error or one that never returns. In the above line the array is empty and it is never going to have any values. Hence the type of the array is never.

//2
const noOfAllies: Array<number> = []
//In the above line, we have declared an array noOfAllies that can only have number values. The Array<number> syntax is another way to specify the type of values that an array can have. In this case, the array can only have number values. The Array<number> means the same as number[].

noOfAllies.push(3);

//3
type User = {
    name: string,
    email: string,
}

const users: Array<User> = []
users.push({name: "lmao",email: "noob"})


//4
const two_D_Array: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//In the above line, we have declared a 2D array MLModels that can only have number arrays. The number[][] syntax is used to specify that the array can only have number arrays. In this case, the array can only have number arrays.

export{}