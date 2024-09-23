let score: number | string = 10;
score = "10";

type bool = boolean | string;

type User = {
    name: string;
    id: number | string;
}

type Admin ={
    username: string;
    id : number | string;
}

let Shikhar: User | Admin = {name: "Shikhar", id: 1};
Shikhar = {username: "Shikhar", id: 1};

function getDbId(id: number | string){
    // return id.tolowerCase();
    // Property 'tolowerCase' does not exist on type 'string | number' because it is not a string same for number
    if(typeof id === "string"){
        return id.toLowerCase();
    } 
}

//array
const data1: number[] | string[] = [1,2,3,4,5];
const data2: (number | string)[] = [1,2,3,"4","5"];
const data3: Array<number | string> = [1,2,3,"4","5"];

const data4: any[] = [1,2,3,"4","5"];
//You can use any[] to store any type of data in an array. It is not recommended to use any[] as it will not provide type safety.

//object
let obj: {name: string, id: number | string} = {
    name: "rgrg",
    id: 1
}

let seatAllotment: "aisle" | "middle" | "window" = "aisle";
seatAllotment = "middle";

//function
function printId(id: number | string){
    console.log(id);
}

export {}