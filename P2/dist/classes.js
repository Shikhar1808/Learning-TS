"use strict";
var _User_email;
class User {
    constructor(name, age) {
        this.city = "Bareilly"; //Here we are defining a private property. It can only be accessed inside the class.
        _User_email.set(this, "shikhar"); //Here we are defining a private property using the new syntax. It can only be accessed inside the class.
        this.name = name; //They are giving error because we have not defined the properties name and age. We can define them in the constructor itself also but it is not a good practice. So we will define them outside the constructor.
        this.age = age;
    }
}
_User_email = new WeakMap();
const Shikhar = new User('Shikhar', 21);
