console.log("Welcome to spotify");

//Initialize the variables
let songIndex = 0; // which song will play
let audioElement = new Audio('songs/dil-mutiyar-da.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName:"\"dill-mutiyar-da\"", filePath:"songs/dil-mutiyar-da.mp3", coverPath:"cover/1.jpg"},
    {songName:"\"Hello Hi\"", filePath:"songs/Hello Hi.mp3", coverPath:"cover/2.jpg"},
    {songName:"\"Na Larya kar tu\"", filePath:"songs/Na Larya kar tu.mp3", coverPath:"cover/3.jpg"},
    {songName:"\"Pal ek pal\"", filePath:"songs/Pal ek pal.mp3", coverPath:"cover/4.jpg"},
    {songName:"\"relation\"", filePath:"songs/relation.mp3", coverPath:"cover/5.jpg"},
    {songName:"\"sheh-2\"", filePath:"songs/sheh-2.mp3", coverPath:"cover/6.jpg"},
    {songName:"\"sheh\"", filePath:"songs/sheh.mp3", coverPath:"cover/7.jpg"},
    {songName:"\"Suno Na Sangemarmar\"", filePath:"songs/Suno Na Sangemarmar.mp3", coverPath:"cover/8.jpg"},
    {songName:"\"teri-kami\"", filePath:"songs/teri-kami.mp3", coverPath:"cover/9.jpg"},
    {songName:"\"Yarri\"", filePath:"songs/Yaari.mp3", coverPath:"cover/10.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
//Handle play/pause click
// const handleClick = ()=>{
//     console.log("handleclick");
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;
//     }
// }
masterPlay.addEventListener("click", ()=>{
    console.log("handleclick");
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

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log("TimeUpdate");
    //update progressBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
    ts = audioElement.duration;
    hour = parseInt(ts/3600);
    b = parseInt(ts%3600);
    min = parseInt(b/60);
    sec= parseInt(b%60);
    currentTime.innerText = audioElement.duration;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((progressBar.value * audioElement.duration)/100);
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
        console.log(e.target);
        songIndex = parseInt(e.target.id);

        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        // audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.src = songs[songIndex].filePath;
       
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        // e.target.addEventListener('click',()=>{
        //     if(audioElement.paused || audioElement.currentTime<=0){
        //         audioElement.play();
        //         e.target.classList.remove('fa-circle-play');
        //         e.target.classList.add('fa-circle-pause');
        //         gif.style.opacity = 1;
        //     }
        //     else{
        //         audioElement.pause();
        //         e.target.classList.remove('fa-circle-pause');
        //         e.target.classList.add('fa-circle-play');
        //         gif.style.opacity = 0;
        //     }
        // })
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})

