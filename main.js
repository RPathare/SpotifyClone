console.log("WELCOME TO MY SPOTIFY");

let songIndex = 0;
let audioElement = new Audio('../SpotifyClone/songs/1.mp3');
let audioElement1 = new Audio('../SpotifyClone/songs/2.mp3');
let audioElement2 = new Audio('../SpotifyClone/songs/3.mp3');
let audioElement3 = new Audio('../SpotifyClone/songs/4.mp3');
let audioElement4 = new Audio('../SpotifyClone/songs/5.mp3');
let audioElement5 = new Audio('../SpotifyClone/songs/6.mp3');
let audioElement6 = new Audio('../SpotifyClone/songs/7.mp3');
let audioElement7 = new Audio('../SpotifyClone/songs/8.mp3');
let audioElement8 = new Audio('../SpotifyClone/songs/9.mp3');
let audioElement9 = new Audio('../SpotifyClone/songs/10.mp3');

 let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    
    {songName:"Salam-e-Ishq", filePath:"../SpotifyClone/songs/1.mp3", coverPath:"../SpotifyClone/covers/1.jpg"},
    {songName:"tera fitoor", filePath:"../SpotifyClone/songs/2.mp3", coverPath:"../SpotifyClone/covers/2.jpg"},
    {songName:"pehle bhi mai", filePath:"../SpotifyClone/songs/3.mp3", coverPath:"../SpotifyClone/covers/3.jpg"},
    {songName:"chakor", filePath:"../SpotifyClone/songs/4.mp3", coverPath:"../SpotifyClone/covers/4.jpg"},
    {songName:"tum or mai", filePath:"../SpotifyClone/songs/5.mp3", coverPath:"../SpotifyClone/covers/5.jpg"},
    {songName:"my mom-dad", filePath:"../SpotifyClone/songs/6.mp3", coverPath:"../SpotifyClone/covers/6.jpg"},
    {songName:"pehli dafa", filePath:"../SpotifyClone/songs/7.mp3", coverPath:"../SpotifyClone/covers/7.jpg"},
    {songName:"tera hau", filePath:"../SpotifyClone/songs/8.mp3", coverPath:"../SpotifyClone/covers/8.jpg"},
    {songName:"teri meri kah", filePath:"../SpotifyClone/songs/9.mp3", coverPath:"../SpotifyClone/covers/9.jpg"},
    {songName:"animal songs", filePath:"../SpotifyClone/songs/10.mp3",coverPath:"../SpotifyClone/covers/10.jpg"},
   
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `../SpotifyClone/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../SpotifyClone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../SpotifyClone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})