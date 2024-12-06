// KF Panda Search
// HTML VARS
var charNameEl = document.getElementById("char-name");
var charQuoteEl = document.getElementById("char-quote");
var charImgEl = document.getElementById("char-img");
// Evnent lsinters
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", theme);

// functions
function btnClicked() {
  // input
  let name = document.getElementById("char-in").value.toLowerCase();

  //   if satment-test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    // Po
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    // Tigress
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "How's that for a little kitten?";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    //  Mantis

    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML =
      "It's not the size of an insect in the fight, but the size of the fight in the insect.";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    // Monkey
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML =
      "For once I'm not the 800 pound gorilla in the room.";
    charImgEl.src = "img/monkey.png";
  } else if (name === "viper") {
    // Mantis
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else {
    charNameEl.innerHTML = "????????";
    charQuoteEl.innerHTML = "--------------------------";
    charImgEl.src = "img/question-mark.png";
  }
}

function theme() {
  // input
  let name = document.getElementById("theme-in").value.toLowerCase();

  //   if satment-test the input
  if (name === "dark") {
    // dark mode
    document.body.style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("h1").style.color = " white ";
    document.getElementById("h2").style.color = " white ";
    document.getElementById("p1").style.color = " white ";
  } else if (name === "light") {
    // light mode
    document.body.style.background = "rgba(255,255,255, 0.7)";
    document.getElementById("h1").style.color = " black ";
    document.getElementById("h2").style.color = " black ";
    document.getElementById("p1").style.color = " black ";
  } else if (name === "random") {
    // random mode
    var r1 = Math.random() * 255;
    var g1 = Math.random() * 255;
    var b1 = Math.random() * 255;
    document.body.style.background = `rgba(${r1},${g1},${b1}, 0.7)`;

    var r2 = Math.random() * 255;
    var g2 = Math.random() * 255;
    var b2 = Math.random() * 255;
    document.getElementById("h1").style.color = `rgb(${r2},${g2},${b2})`;

    var r3 = Math.random() * 255;
    var g3 = Math.random() * 255;
    var b3 = Math.random() * 255;
    document.getElementById("h2").style.color = `rgb(${r3},${g3},${b3})`;

    var r4 = Math.random() * 255;
    var g4 = Math.random() * 255;
    var b4 = Math.random() * 255;
    document.getElementById("p1").style.color = `rgb(${r4},${g4},${b4})`;
  }
}
