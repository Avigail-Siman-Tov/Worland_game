//Adding the audio button and the functions to hear the melody
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {//If the user presses the button of the audio when it is paused, then it activates the audio and changes the icon
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove("fa-volume-mute");
    icon.classList.add("fa-volume-up");
  } else {//And vice versa when he clicks on the audio when it's on he stops the audio and changes the icon
    audio.pause();
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-mute");
  }
  button.classList.add("fade");
});




