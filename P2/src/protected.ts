class User{
    name: string;
    age: number;
    private city: string = "Bareilly";
    #email: string = "shikhar"; 
    protected _courseCount: number = 1;
    //protected is a keyword that restricts the access of a variable to the class and its subclasses only and not to the objects of the class. It can be accessed by the objects of the class using the getter and setter methods.
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    private deleteToken(){
        console.log('Deleting token');
    }

    get getAppleEmail(): string{ 
        return this.#email + '@apple.com';
    }

    get getCourseCount(): number{
        return this._courseCount;
    }

    set courseCount(count: number){
        if(count <= 1){
            throw new Error('Invalid count');
        }
        this._courseCount = count;
    }
}

class SubUser extends User{
    isFamily: boolean = true;

    changeCourseCount(){ 
        this._courseCount = 10;
    
    }
}

const Shikhar = new User('Shikhar', 21);
console.log(Shikhar.getAppleEmail);
Shikhar.courseCount = 2;
//example of protected
console.log(Shikhar.getCourseCount);



export{}