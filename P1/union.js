var score = 10;
score = "10";
var Shikhar = { name: "Shikhar", id: 1 };
Shikhar = { username: "Shikhar", id: 1 };
function getDbId(id) {
    // return id.tolowerCase();
    // Property 'tolowerCase' does not exist on type 'string | number' because it is not a string same for number
    if (typeof id === "string") {
        return id.toLowerCase();
    }
}
//array
var data1 = [1, 2, 3, 4, 5];
var data2 = [1, 2, 3, "4", "5"];
var data3 = [1, 2, 3, "4", "5"];
var data4 = [1, 2, 3, "4", "5"];
//You can use any[] to store any type of data in an array. It is not recommended to use any[] as it will not provide type safety.
//object
var obj = {
    name: "rgrg",
    id: 1
};
var seatAllotment = "aisle";
seatAllotment = "middle";
//function
function printId(id) {
    console.log(id);
}
