// select all the keys and change the border by toggling "playing" class on clicko
// this isn't what we need to do for the project but proves it toggles the change
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", () => key.classList.toggle("playing"));
});

// TODO Link specific key press to playing sound
// TODO Link key press/playing sound to toggle of css change (border etc)
