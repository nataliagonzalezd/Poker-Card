// /* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomCard();
};

function randomCard() {
  var palos = ["♥", "♠", "♣", "♦"];
  var numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var indexPalo = Math.floor(Math.random() * palos.length);
  var indexNumero = Math.floor(Math.random() * numero.length);
  //2. manipular
  top.innerHTML = palos[indexPalo];
  bottom.innerHTML = palos[indexPalo];
  number.innerHTML = numero[indexNumero];
  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
}

var top = document.querySelector(".topIcon");
var bottom = document.querySelector(".bottomIcon");
var number = document.querySelector(".number");
var button = document.querySelector(".btn");
var body = document.body;
body.className += "bg-success";
var card = document.querySelector(".card");
var cardContainer = document.querySelector(".container-fluid");
cardContainer.className += " d-flex justify-content-center mt-3";
top.className += " text ps-3 ";
bottom.className += " d-flex justify-content-end p-4 text ";
number.className += " text-center p-4 text mb-1 mt-1";
top.style.fontSize = "100px";
bottom.style.fontSize = "100px";
number.style.fontSize = "150px";
button.addEventListener("click", function() {
  randomCard();
});

let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(randomCard, 10000);
}
repetirCadaSegundo();

function change() {
  var b1 = document.getElementById("ht").value;
  var b2 = document.getElementById("wd").value;
  card.style.width = b2 + "px";
  card.style.height = b1 + "px";
}

var changebtn = document.getElementById("change");
changebtn.addEventListener("click", function() {
  change();
});
