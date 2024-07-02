//In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//1. Create a class named Video. The class should be constructed with the following parameters:
    //title (a string)
    //uploader (a string, the person who uploaded it)
    //time (a number, the duration of the video - in seconds)
//2. Create a method called watch() which displays a string as follows:
//“uploader parameter watched all time parameter of title parameter!”
class Video {
    constructor(title, uploader, time){
        this.title = String(title);
        this.uploader = String(uploader);
        this.time = Number(time);
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

//3. Instantiate a new Video instance and call the watch() method.
const video1 = new Video('How to Code', 'Zachary', 240);
video1.watch();//Zachary watched all 120 of How to Code!
//4. Instantiate a second Video instance with different values.
const video2 = new Video('How to Cook', 'Jacob', 1060);
video2.watch();//Jacob watched all 1060 of How to Cook!
//5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
const videos = [
    new Video('How to Code', 'Zachary', 240),
    new Video('How to Cook', 'Jacob', 1060),
    new Video('How to Dance', 'John', 360),
    new Video('How to Sing', 'Jenny', 460),
    new Video('How to Draw', 'Zoe', 560)
];
//6. Bonus: Loop through the array to instantiate those instances.
videos.forEach(video => video.watch());
//Zachary watched all 240 of How to Code!
//Jacob watched all 1060 of How to Cook!
//John watched all 360 of How to Dance!
//Jenny watched all 460 of How to Sing!
//Zoe watched all 560 of How to Draw!