var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["Window"] = 0] = "Window";
    SeatChoice[SeatChoice["Aisle"] = 1] = "Aisle";
    SeatChoice[SeatChoice["Middle"] = 10] = "Middle";
    SeatChoice["Fourth"] = "Fourth";
    // Fifth, //error: Enum member must have initializer because 'Fourth' is a string value and 'Fifth' is not assigned any value so we should assign a value to it or assign a value to 'Fourth' as a number or re-arrange the elements
})(SeatChoice || (SeatChoice = {}));
//Enums are a way to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var mySeat = SeatChoice.Window;
//Usage of enums
function getSeat(seat) {
    if (seat === SeatChoice.Window) {
        console.log("You have a window seat");
    }
    else if (seat === SeatChoice.Aisle) {
        console.log("You have an aisle seat");
    }
    else if (seat === SeatChoice.Middle) {
        console.log("You have a middle seat");
    }
    else if (seat === SeatChoice.Fourth) {
        console.log("You have a fourth seat");
    }
}
