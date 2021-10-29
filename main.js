let audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "src/song.mp3";

document.body.addEventListener("click", function () {
    audio.play();
})

audio.addEventListener("ended",() => audio.play());
