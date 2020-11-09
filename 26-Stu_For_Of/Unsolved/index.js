const songsLi = document.querySelectorAll("li");

// for (const song of songsLi) {
//   song.classList.add("red");
// }

songsLi.forEach((song) => {
  song.classList.add("red");
});
