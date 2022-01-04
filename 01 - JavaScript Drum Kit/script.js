window.addEventListener("keydown", playSound);

//  Link key press/playing sound to toggle of css change (border etc)

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

//  Link specific key press to playing sound
//
// <audio data-key="65" src="sounds/clap.wav"></audio>

//   <div data-key="75" class="key"></div>

function playSound(event) {
  console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  console.log(audio);
  key.classList.add("playing");
  // add reset to 0 so can play multiple of same sound in a row
  //    without waitihg to finish
  audio.currentTime = 0;
  audio.play();
}
