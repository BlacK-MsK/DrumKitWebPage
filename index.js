function makeSound(key) {
    var audioFile;
    switch (key) {
        case "w":
            audioFile = "sounds/tom-1.mp3";
            break;
        case "a":
            audioFile = "sounds/tom-2.mp3";
            break;
        case "s":
            audioFile = "sounds/tom-3.mp3";
            break;
        case "d":
            audioFile = "sounds/tom-4.mp3";
            break;
        case "j":
            audioFile = "sounds/snare.mp3";
            break;
        case "k":
            audioFile = "sounds/crash.mp3";
            break;
        case "l":
            audioFile = "sounds/kick-bass.mp3";
            break;

        default:
            break;
    }

    var audio = new Audio(audioFile);
    audio.play();
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);

}


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });

}


document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});