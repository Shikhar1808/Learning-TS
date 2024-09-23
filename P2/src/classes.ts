class User{
    name: string;//Here we are defining the properties of the class. We can also define them in the constructor itself.
    age: number;
    private city: string = "Bareilly";//Here we are defining a private property. It can only be accessed inside the class.
    #email: string = "shikhar"; //Here we are defining a private property using the new syntax. It can only be accessed inside the class.

    constructor(name: string, age: number){//Here the name and age are initialized with the values passed in the constructor.
        this.name = name;//They are giving error because we have not defined the properties name and age. We can define them in the constructor itself also but it is not a good practice. So we will define them outside the constructor.
        this.age = age;
    }
}

const Shikhar = new User('Shikhar', 21);