
let pauseBtn = document.getElementById("play-pause");
let skipNext = document.getElementById("right-btn");
let skipBack = document.getElementById("left-btn");
let controller = document.getElementById("controller");
let music = document.querySelector('Audio');

var library = [{artistName:"TwentyOnePilots", songName:"Ride", Img:"./images/maxresdefault.jpg", src:"ride.mp3",backgroundImage:"url('./images/maxresdefault.jpg')"},
               {artistName:"Twenty One Pilots",songName:"Chlorine", Img:"./images/chlorine.png", src:"Chlorine.mp3",backgroundImage:"url('./images/chlorine.png')"},
               {artistName:"Dua Lipa", songName:"One Kiss", Img:"./images/dualipa.jpg", src:"One-Kiss.mp3",backgroundImage:"url('./images/dualipa.jpg')"}
                ]


let title = document.getElementById("title");
let artist = document.getElementById("artist");
let songImg = document.getElementById("songImg");
let body = document.querySelector("body");
let musicSrc = document.querySelector("audio");


var position = 0;
skipNext.addEventListener("click",() => {
    
    if(library.length-1 == position){
        position = 0;
    }
    else{
        position = position + 1;
    }

    MusicList(position);
});


function MusicList(position){
    musicSrc.src = './audio/' + library[position].src;
    title.innerHTML = library[position].songName;
    artist.innerHTML = library[position].artistName;
    songImg.src = library[position].Img;
    body.style.backgroundImage = library[position].backgroundImage;
    music.play();
}

MusicList(position);








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








