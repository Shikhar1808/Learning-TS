"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    takePhoto() {
        console.log('Taking photo');
    }
}
class Facebook {
    constructor(cameraMode, filter, burst, short) {
        this.short = short;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = "Short video"; //class can have more properties than the interface but not less
    }
    createStory() {
        console.log('Creating story');
    }
    takePhoto() {
        console.log('Taking photo');
    }
}
