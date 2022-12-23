let isClicked = false;
var background_music = new Audio('bgm.mp3');

document.getElementById("music_btn").addEventListener("click", function() {
    if (isClicked == true) {
        background_music.pause();
        isClicked = false;
    } else {
        background_music.play();
        isClicked = true;
    }
})