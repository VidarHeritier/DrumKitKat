const notes = ["♯", "𝅘𝅥", "𝅘𝅥𝅰", "𝄾", "𝄞", "𝆺𝅥", "♭", "𝆹𝅥𝅯", "𝅗𝅥", "♫", "𝅀"];
const songs = [
  {
    soundName: "abba",
    source: "./Sounds/_ABBA_Name_Of_The_Game_drumnet_ru_drumless.mp3",
  },
  {
    soundName: "metallica",
    source:
      "./Sounds/_Metallica_Enter_Sandman_metalika_drumnet_ru_drumless.mp3",
  },
  {
    soundName: "queen",
    source: "./Sounds/_Queen_We_Are_The_Champions_drumnet_ru_drumless.mp3",
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
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === drumKey) {
      const drumSounds = new Audio(drumSource);
      drumSounds.play();
      animateBtns(drumKey);
    }
  });
}

function animateBtns(drumKey) {
  document.querySelector(`.${drumKey}`).style.animation =
    "blur .15s ease-in, scaleDown .15s ease-in, brightness .15s ease-in";
  setTimeout(() => {
    document.querySelector(`.${drumKey}`).style.animation = "";
  }, 200);
}

const songsDiv = document.querySelector(".songs");

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
  const knapp = document.querySelector(`.${soundName}`);
  knapp.addEventListener("click", () => {
    if (!crazyFroggy) {
      backgroundSongs.pause();
      crazyFroggy = true;
      knapp.textContent = soundName;
      knapp.style.animation =
        "blur .15s ease-in, scaleDown .15s ease-in, brightness .15s ease-in";
    } else {
      backgroundSongs.play();
      crazyFroggy = false;
      knapp.textContent = "pause";
      knapp.style.animation =
        "blur .15s ease-in, scaleDown .15s ease-in, brightness .15s ease-in";
    }
  });
}

const noteContainer = document.querySelector(".note-container");
let singleNote = "";

// function generateNote() {
//   setInterval(() => {
//     singleNote = "";
//     let randomNote = "";
//     for (let i = 0; i < 1; i++) {
//       randomNote = Math.floor(Math.random() * notes.length);
//       singleNote += notes[randomNote];
//     }
//     const musicNote = document.createElement("h3");
//     musicNote.classList.add("music-notes");
//     musicNote.textContent = singleNote;
//     noteContainer.append(musicNote);
//     setTimeout(() => {
//       musicNote.remove();
//     }, 700);
//   }, 500);
// }
