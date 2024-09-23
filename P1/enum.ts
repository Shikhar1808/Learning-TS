enum SeatChoice{
    Window, //the first element is 0 by default
    Aisle,//the second element is 1 by default
    Middle = 10, //you can also assign values to the elements,
    Fourth = "Fourth", //or even assign string values
    // Fifth, //error: Enum member must have initializer because 'Fourth' is a string value and 'Fifth' is not assigned any value so we should assign a value to it or assign a value to 'Fourth' as a number or re-arrange the elements
}//This will generate a complex javascript code

//const enum SeatChoice{ this will not generate any complec javascript code
//  ..//
//}

//Enums are a way to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
//Enum stands for enumerated type. It is a way to give more friendly names to sets of numeric values.

const mySeat: SeatChoice = SeatChoice.Window; 

//Usage of enums
function getSeat(seat: SeatChoice){
    if(seat === SeatChoice.Window){
        console.log("You have a window seat");
    } else if(seat === SeatChoice.Aisle){
        console.log("You have an aisle seat");
    } else if(seat === SeatChoice.Middle){
        console.log("You have a middle seat");
    } else if(seat === SeatChoice.Fourth){
        console.log("You have a fourth seat");
    }
}

export{}