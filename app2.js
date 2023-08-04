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
    key: "W",
    source: "./Sounds/CYCdh_VinylK1-ClHat01.wav",
  },
  {
    soundName: "drum2",
    key: "A",
    source: "./Sounds/CYCdh_VinylK1-ClHat02.wav",
  },
  {
    soundName: "drum3",
    key: "S",
    source: "./Sounds/CYCdh_VinylK1-Kick01.wav",
  },
  {
    soundName: "drum4",
    key: "D",
    source: "./Sounds/CYCdh_VinylK1-Kick02.wav",
  },
  {
    soundName: "drum5",
    key: "T",
    source: "./Sounds/CYCdh_VinylK1-Kick03.wav",
  },
  {
    soundName: "drum6",
    key: "F",
    source: "./Sounds/CYCdh_VinylK1-OpHat.wav",
  },
  {
    soundName: "drum7",
    key: "G",
    source: "./Sounds/CYCdh_VinylK1-Shkr01.wav",
  },
  {
    soundName: "drum8",
    key: "H",
    source: "./Sounds/CYCdh_VinylK1-Shkr02.wav",
  },
  {
    soundName: "drum9",
    key: "I",
    source: "./Sounds/CYCdh_VinylK1-Shkr03.wav",
  },
  {
    soundName: "drum10",
    key: "J",
    source: "./Sounds/CYCdh_VinylK1-Snr01.wav",
  },
  {
    soundName: "drum11",
    key: "K",
    source: "./Sounds/CYCdh_VinylK1-Snr02.wav",
  },
  {
    soundName: "drum12",
    key: "L",
    source: "./Sounds/CYCdh_VinylK1-Tamb.wav",
  },
];

const container = document.querySelector(".container");

for (let drum of drums) {
  const drumSounds = new Audio(drum.source);

  drumSounds.play();

  const addDiv = document.createElement("div");
  const addKey = document.createElement("h2");
  addKey.textContent = drum.key;
  addKey.className = `${drum.key} h2`;

  addDiv.append(addKey);
  container.append(addDiv);

  clickDrums();
  animateBtns();
}
function clickDrums() {
  document.querySelectorAll(".h2").forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log("clicked");
    });
  });
}

function animateBtns() {
  document.querySelectorAll(".h2").forEach((drumkeys) => {
    h2.style.animation =
      "blur .3s ease-in, scaleDown .3s ease-in, brightness .3s ease-in";
  });
}
