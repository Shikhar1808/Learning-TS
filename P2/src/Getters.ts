class User{
    name: string;
    age: number;
    private city: string = "Bareilly";
    #email: string = "shikhar"; 
    private _courseCount: number = 1;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    private deleteToken(){
        console.log('Deleting token');
    }

    get getAppleEmail(): string{ //get is a keyword, getter is a function that returns a value of a private variable and it is accessed like a property of the class
        return this.#email + '@apple.com';
    }

    get getCourseCount(): number{
        return this._courseCount;
    }

    set courseCount(count: number){ //set is a keyword, setter is a function that sets the value of a private variable and it is accessed like a property of the class. It should not have a return type because it is not returning anything
        if(count <= 1){
            throw new Error('Invalid count');
        }
        this._courseCount = count;
    }
}

const Shikhar = new User('Shikhar', 21);
console.log(Shikhar.getAppleEmail);
Shikhar.courseCount = 2;



export{}