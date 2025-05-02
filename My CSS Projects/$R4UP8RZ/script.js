console.log("Welcome to Musify");

    let songindex= 0;
    let audioElement= new Audio('nabina.mp3')
    let masterPlay=document.getElementById('masterPlay')
    let myProgressBar=document.getElementById('masterPlay')

    let song=[
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"},
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"},
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"},
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"},
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"},
        {songName:"jundullah",filePath:"nabina.mp3",coverPath:"covers/1.jpg"}
    ]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||  audioElement.currentTime<=0){
        audioElement.play()
    }
})

// audioElement.play();
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})