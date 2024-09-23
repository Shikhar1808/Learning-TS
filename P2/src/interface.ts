interface TakePhoto{
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story{
    createStory(): void;
}

class Instagram implements TakePhoto{ //this syntax means that the class Instagram is implementing the interface TakePhoto
    cameraMode: string;
    filter: string;
    burst: number;

    constructor(cameraMode: string, filter: string, burst: number){
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }

    takePhoto(){
        console.log('Taking photo');
    }
}

class Facebook implements TakePhoto, Story{ //this syntax means that the class Facebook is implementing the interfaces TakePhoto and Story
    cameraMode: string;
    filter: string;
    burst: number;

    constructor(cameraMode: string, filter: string, burst: number, public short: string){
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = "Short video";//class can have more properties than the interface but not less
    }

    createStory(){
        console.log('Creating story');
    }
    takePhoto(){
        console.log('Taking photo');
    }
}