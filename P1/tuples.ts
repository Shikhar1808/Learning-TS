const user: (string | number)[] = ["Shikhar",1]
//No specific order is required

const admin: [string, number,boolean] = ["Shikhar",1,true]
//Specific order is required
//This is called tuple. Tuple is a fixed-size array where the type of each element is known.

type User = [string, number];

const user1: User = ["Shikhar",1]

// user1.push(true)
//Check it online