//What are abstract classes?
//Abstract classes are mainly for inheritance where other classes may derive from them. They cannot be instantiated0 themselves. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
//An abstract class is a class that cannot be instantiated. It is created to be subclassed only. An abstract class may have abstract methods that are not implemented in the abstract class, but must be implemented in derived classes.

abstract class TakePhoto {
    cameraMode: string;
    filter: string;

    constructor(cameraMode: string, filter: string){
        this.cameraMode = cameraMode;
        this.filter = filter;
    }

    abstract takePhoto(): void //Abstract methods are methods within an abstract class that do not have an implementation. They must be implemented by derived classes. The abstract keyword is used to define abstract methods.
    getVideoTime(): number{//It is not giving any error because it is not an abstract method.
        return 8;
    }
}

class Snapchat extends TakePhoto{
    constructor(cameraMode: string, filter: string, public burst: number){
        super(cameraMode, filter);
        //the super keyword is used to access and call functions on an object's parent. Here, it is used to call the constructor of the parent class and to pass the cameraMode and filter parameters to it.
        this.burst = burst;
    }

    takePhoto(){
        console.log('Taking photo');
    }
}

// const ShikharSaxena = new TakePhoto('Portrait', 'B&W', 3); //Error: Cannot create an instance of an abstract class because it is not possible to create an instance of an abstract class. Abstract classes are mainly for inheritance where other classes may derive from them. They cannot be instantiated themselves.

const ShikharSaxena = new Snapchat('Portrait', 'B&W', 3);
ShikharSaxena.takePhoto();
console.log(ShikharSaxena.getVideoTime());

export{}