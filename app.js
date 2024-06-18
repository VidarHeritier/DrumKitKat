const notes = ["♯", "𝅘𝅥", "𝅘𝅥𝅰", "𝄾", "𝄞", "𝆺𝅥", "♭", "𝆹𝅥𝅯", "𝅗𝅥", "♫", "𝅀"];
const songs = [
  {
    soundName: "abba",
    source: "./Sounds/ABBA_Name_Of_The_Game_drumnet_ru_drumless.mp3",
  },
  {
    soundName: "metallica",
    source: "./Sounds/Metallica_Enter_Sandman_metalika_drumnet_ru_drumless.mp3",
  },
  {
    soundName: "queen",
    source: "./Sounds/Queen_We_Are_The_Champions_drumnet_ru_drumless.mp3",
  },
];

const drums = [
  {
    soundName: "drum1",
    key: "w",
    source: "./Sounds/CYCdh_VinylK1-ClHat01.wav",
  },
  {
    soundName: "drum2",
    key: "a",
    source: "./Sounds/CYCdh_VinylK1-ClHat02.wav",
  },
  {
    soundName: "drum3",
    key: "s",
    source: "./Sounds/CYCdh_VinylK1-Kick01.wav",
  },
  {
    soundName: "drum4",
    key: "d",
    source: "./Sounds/CYCdh_VinylK1-Kick02.wav",
  },
  {
    soundName: "drum5",
    key: "t",
    source: "./Sounds/CYCdh_VinylK1-Kick03.wav",
  },
  {
    soundName: "drum6",
    key: "f",
    source: "./Sounds/CYCdh_VinylK1-OpHat.wav",
  },
  {
    soundName: "drum7",
    key: "g",
    source: "./Sounds/CYCdh_VinylK1-Shkr01.wav",
  },
  {
    soundName: "drum8",
    key: "h",
    source: "./Sounds/CYCdh_VinylK1-Shkr02.wav",
  },
  {
    soundName: "drum9",
    key: "i",
    source: "./Sounds/CYCdh_VinylK1-Shkr03.wav",
  },
  {
    soundName: "drum10",
    key: "j",
    source: "./Sounds/CYCdh_VinylK1-Snr01.wav",
  },
  {
    soundName: "drum11",
    key: "k",
    source: "./Sounds/CYCdh_VinylK1-Snr02.wav",
  },
  {
    soundName: "drum12",
    key: "l",
    source: "./Sounds/CYCdh_VinylK1-Tamb.wav",
  },
];

const container = document.querySelector(".container");

for (let drum of drums) {
  const addDiv = document.createElement("div");
  const addKey = document.createElement("h2");
  addKey.textContent = drum.key;
  addKey.className = `${drum.key}`;

  addDiv.append(addKey);
  container.append(addDiv);

  clickDrums(drum.key, drum.source);
}

function clickDrums(drumKey, drumSource) {
  document.querySelector(`.${drumKey}`).addEventListener("click", () => {
    const drumSounds = new Audio(drumSource);
    drumSounds.play();
    animateBtns(drumKey);
    displayNote();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === drumKey) {
      const drumSounds = new Audio(drumSource);
      drumSounds.play();
      animateBtns(drumKey);
      displayNote();
    }
  });
}

function animateBtns(drumKey) {
  const element = document.querySelector(`.${drumKey}`);
  element.style.animation =
    "blur .15s ease-in, scaleDown .15s ease-in, brightness .15s ease-in";
  setTimeout(() => {
    element.style.animation = "";
  }, 200);
}

const songsDiv = document.querySelector(".songs");
let currentPlayingSong = null;

for (let song of songs) {
  const addDiv = document.createElement("div");
  const addKey = document.createElement("h2");
  addKey.textContent = song.soundName;
  addKey.className = `${song.soundName}`;

  addDiv.append(addKey);
  songsDiv.append(addDiv);
  playSongs(song.source, song.soundName);
}

function playSongs(songSource, soundName) {
  const backgroundSongs = new Audio(songSource);
  let crazyFroggy = true;
  const songButtons = document.querySelector(`.${soundName}`);
  songButtons.addEventListener("click", () => {
    if (currentPlayingSong && currentPlayingSong !== backgroundSongs) {
      currentPlayingSong.pause();
      document.querySelector(`.${currentPlayingSong.soundName}`).textContent =
        currentPlayingSong.soundName;
    }
    if (!crazyFroggy) {
      backgroundSongs.pause();
      crazyFroggy = true;
      songButtons.textContent = soundName;
    } else {
      backgroundSongs.play();
      currentPlayingSong = backgroundSongs;
      backgroundSongs.soundName = soundName;
      crazyFroggy = false;
      songButtons.textContent = "pause";
    }
    songButtons.style.animation =
      "blur .15s ease-in, scaleDown .15s ease-in, brightness .15s ease-in";
  });
}

const noteContainer = document.querySelector(".note-container");
const notePool = [];

function displayNote() {
  let note;
  if (notePool.length > 0) {
    note = notePool.pop();
  } else {
    note = document.createElement("h3");
    note.classList.add("music-notes");
    noteContainer.append(note);
  }
  let randomNote = Math.floor(Math.random() * notes.length);
  note.textContent = notes[randomNote];
  note.style.display = "block";
  note.style.opacity = 1;
  setTimeout(() => {
    note.style.opacity = 0;
    setTimeout(() => {
      note.style.display = "none";
      notePool.push(note);
    }, 500);
  }, 500);
}

window.addEventListener("keypress", (e) => {
  if (e.key === "c") {
    const originalContent = document.querySelectorAll(".easter");

    const isHidden = Array.from(originalContent).some(
      (element) => element.style.visibility === "hidden"
    );

    if (isHidden) {
      restoreOriginalContent(originalContent);
    } else {
      displayPicture(originalContent);
    }
  }
});

function displayPicture(originalContent) {
  const imageUrl = "./Images/Cat.jpeg";
  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  img.style.margin = "auto";
  img.style.display = "block";

  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex";
  containerDiv.style.alignItems = "center";
  containerDiv.style.justifyContent = "center";
  containerDiv.style.height = "100vh";
  containerDiv.style.width = "100vw";
  containerDiv.style.position = "fixed";
  containerDiv.style.top = "0";
  containerDiv.style.left = "0";
  containerDiv.style.zIndex = "9999";
  containerDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

  containerDiv.appendChild(img);
  document.body.appendChild(containerDiv);

  originalContent.forEach((element) => {
    element.style.visibility = "hidden";
  });

  window.addEventListener("click", () =>
    restoreOriginalContent(originalContent)
  );

  window.addEventListener("keydown", function escListener(event) {
    if (event.key === "Escape") {
      restoreOriginalContent(originalContent);
      window.removeEventListener("keydown", escListener);
    }
  });
}

function restoreOriginalContent(originalContent) {
  const containerDiv = document.querySelector("div[style*='position: fixed']");
  originalContent.forEach((element) => {
    element.style.visibility = "visible";
  });
  if (containerDiv) {
    containerDiv.remove();
  }
}
