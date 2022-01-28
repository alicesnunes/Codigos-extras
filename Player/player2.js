const cover = document.querySelector(".card-image");
const title = document.querySelector(".card.content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector9("audio");

const data =                    
 {
        title: "Baby",
        artist: "Justin Bieber",
        cover: "file/MyWorld.jpg",
        file: "file/baby.mp3"

};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerHTML = <i class='material-icons'>user</i> ${data.artist};
audio.src = data.file;
