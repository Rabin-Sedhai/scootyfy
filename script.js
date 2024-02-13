let pauseBtn = document.getElementById("play-pause");
let skipNext = document.getElementById("right-btn");
let skipBack = document.getElementById("left-btn");
let controller = document.getElementById("controller");
let music = document.querySelector('Audio');


music.onloadedmetadata = function(){
    controller.max = music.duration;
    controller.value = music.currentTime;
}


function playMusic() {
    
    if (pauseBtn.classList.contains('fa-pause')) {
        music.pause();
        pauseBtn.classList.remove('fa-pause');
        pauseBtn.classList.add('fa-play');
    } else {
        music.play();
        pauseBtn.classList.remove('fa-play');
        pauseBtn.classList.add('fa-pause');
    }
}

if(music.play()){
    setInterval(() => {
        controller.value = music.currentTime;
    }, 500);

}

controller.onchange = function(){
    music.play();
    music.currentTime = controller.value;
    pauseBtn.classList.add('fa-pause');
    pauseBtn.classList.remove('fa-play');

}