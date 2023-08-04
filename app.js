// //ABBA

// const abba = new Audio(
//   "./Sounds/_ABBA_Name_Of_The_Game_drumnet_ru_drumless.mp3"
// );

// const songABBA = document.querySelector(".abba-song");

// songABBA.addEventListener("click", () => {
//   abba.play();
// });

// //Metallica

// const metallica = new Audio(
//   "./Sounds/_Metallica_Enter_Sandman_metalika_drumnet_ru_drumless.mp3"
// );

// const songMetallica = document.querySelector(".metallica-song");

// songMetallica.addEventListener("click", () => {
//   metallica.play();
// });

// //Queen

// const queen = new Audio(
//   "./Sounds/_Queen_We_Are_The_Champions_drumnet_ru_drumless.mp3"
// );

// const songQueen = document.querySelector(".queen-song");

// songQueen.addEventListener("click", () => {
//   queen.play();
// });

const keyW = new Audio("./Sounds/CYCdh_VinylK1-ClHat01.wav");

const drum1 = document.querySelector(".drum1");

drum1.addEventListener("click", () => {
  keyW.play();

  pressedBtn(".drum1");
  setTimeout(() => {
    deadBtn(".drum1");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    keyW.play();

    pressedBtn(".drum1");
    setTimeout(() => {
      deadBtn(".drum1");
    }, 200);
  }
});
//-----------------------------------------------------------------
const keyA = new Audio("./Sounds/CYCdh_VinylK1-ClHat02.wav");

const drum2 = document.querySelector(".drum2");

drum2.addEventListener("click", () => {
  keyA.play();

  pressedBtn(".drum2");
  setTimeout(() => {
    deadBtn(".drum2");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    keyA.play();

    pressedBtn(".drum2");
    setTimeout(() => {
      deadBtn(".drum2");
    }, 200);
  }
});
//-------------------------------------------------------------
const keyS = new Audio("./Sounds/CYCdh_VinylK1-Kick01.wav");

const drum3 = document.querySelector(".drum3");

drum3.addEventListener("click", () => {
  keyS.play();

  pressedBtn(".drum3");
  setTimeout(() => {
    deadBtn(".drum3");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    keyS.play();

    pressedBtn(".drum3");
    setTimeout(() => {
      deadBtn(".drum3");
    }, 200);
  }
});
//--------------------------------------------------------------
const keyD = new Audio("./Sounds/CYCdh_VinylK1-Kick02.wav");

const drum4 = document.querySelector(".drum4");

drum4.addEventListener("click", () => {
  keyD.play();

  pressedBtn(".drum4");
  setTimeout(() => {
    deadBtn(".drum4");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    keyD.play();

    pressedBtn(".drum4");
    setTimeout(() => {
      deadBtn(".drum4");
    }, 200);
  }
});
//--------------------------------------------------------------------
const keyT = new Audio("./Sounds/CYCdh_VinylK1-Kick03.wav");

const drum5 = document.querySelector(".drum5");

drum5.addEventListener("click", () => {
  keyT.play();

  pressedBtn(".drum5");
  setTimeout(() => {
    deadBtn(".drum5");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    keyT.play();

    pressedBtn(".drum5");
    setTimeout(() => {
      deadBtn(".drum5");
    }, 200);
  }
});
//-------------------------------------------------------------------
const keyF = new Audio("./Sounds/CYCdh_VinylK1-OpHat.wav");

const drum6 = document.querySelector(".drum6");

drum6.addEventListener("click", () => {
  keyF.play();

  pressedBtn(".drum6");
  setTimeout(() => {
    deadBtn(".drum6");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "f") {
    keyF.play();

    pressedBtn(".drum6");
    setTimeout(() => {
      deadBtn(".drum6");
    }, 200);
  }
});
//--------------------------------------------------------------------
const keyG = new Audio("./Sounds/CYCdh_VinylK1-Shkr01.wav");

const drum7 = document.querySelector(".drum7");

drum7.addEventListener("click", () => {
  keyG.play();

  pressedBtn(".drum7");
  setTimeout(() => {
    deadBtn(".drum7");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "g") {
    keyG.play();

    pressedBtn(".drum7");
    setTimeout(() => {
      deadBtn(".drum7");
    }, 200);
  }
});
//----------------------------------------------------------------------
const keyH = new Audio("./Sounds/CYCdh_VinylK1-Shkr02.wav");

const drum8 = document.querySelector(".drum8");

drum8.addEventListener("click", () => {
  keyH.play();

  pressedBtn(".drum8");
  setTimeout(() => {
    deadBtn(".drum8");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "h") {
    keyH.play();

    pressedBtn(".drum8");
    setTimeout(() => {
      deadBtn(".drum8");
    }, 200);
  }
});
//------------------------------------------------------------------------
const keyI = new Audio("./Sounds/CYCdh_VinylK1-Shkr03.wav");

const drum9 = document.querySelector(".drum9");

drum9.addEventListener("click", () => {
  keyI.play();

  pressedBtn(".drum9");
  setTimeout(() => {
    deadBtn(".drum9");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "i") {
    keyI.play();

    pressedBtn(".drum9");
    setTimeout(() => {
      deadBtn(".drum9");
    }, 200);
  }
});
//-------------------------------------------------------------------------
const keyJ = new Audio("./Sounds/CYCdh_VinylK1-Snr01.wav");

const drum10 = document.querySelector(".drum10");

drum10.addEventListener("click", () => {
  keyJ.play();

  pressedBtn(".drum10");
  setTimeout(() => {
    deadBtn(".drum10");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "j") {
    keyJ.play();

    pressedBtn(".drum10");
    setTimeout(() => {
      deadBtn(".drum10");
    }, 200);
  }
});
//-----------------------------------------------------------------
const keyK = new Audio("./Sounds/CYCdh_VinylK1-Snr02.wav");

const drum11 = document.querySelector(".drum11");

drum11.addEventListener("click", () => {
  keyK.play();

  pressedBtn(".drum11");
  setTimeout(() => {
    deadBtn(".drum11");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "k") {
    keyK.play();

    pressedBtn(".drum11");
    setTimeout(() => {
      deadBtn(".drum11");
    }, 200);
  }
});

function pressedBtn(drum) {
  document.querySelector(drum).style.animation =
    "blur .2s ease-in-out, scaleDown .2s ease-in-out, brightness .2s ease-in-out";
}
function deadBtn(drum) {
  document.querySelector(drum).style.animation = "";
}
//------------------------------------------------------------------
const keyL = new Audio("./Sounds/CYCdh_VinylK1-Tamb.wav");

const drum12 = document.querySelector(".drum12");

drum12.addEventListener("click", () => {
  keyL.play();

  pressedBtn(".drum12");
  setTimeout(() => {
    deadBtn(".drum12");
  }, 200);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    keyL.play();

    pressedBtn(".drum12");
    setTimeout(() => {
      deadBtn(".drum12");
    }, 200);

    document.querySelector(".drum12").style.animation =
      "blur .2s ease-in-out, scaleDown .2s ease-in-out, brightness .2s ease-in-out";
  }
});
