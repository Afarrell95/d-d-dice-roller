let dFour = document.querySelector(".d-four");
let dSix = document.querySelector(".d-six");
let dEight = document.querySelector(".d-eight");
let dTen = document.querySelector(".d-ten");
let dTwelve = document.querySelector(".d-twelve");
let dTwenty = document.querySelector(".d-twenty");
let fourRoll = document.querySelector(".four_roll");
let sixRoll = document.querySelector(".six_roll");
let eightRoll = document.querySelector(".eight_roll");
let tenRoll = document.querySelector(".ten_roll");
let twelveRoll = document.querySelector(".twelve_roll");
let twentyRoll = document.querySelector(".twenty_roll");
// let rollText = document.querySelectorAll(".roll");
// let reset = document.querySelector(".reset");

dFour.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 4) + 1;
  fourRoll.innerHTML = roll;
});

dSix.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  sixRoll.innerHTML = roll;
});

dEight.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 8) + 1;
  eightRoll.innerHTML = roll;
});

dTen.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 10) + 1;
  tenRoll.innerHTML = roll;
});

dTwelve.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 12) + 1;
  twelveRoll.innerHTML = roll;
});

dTwenty.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 20) + 1;
  twentyRoll.innerHTML = roll;
});

// reset.addEventListener("click", () => {
//   rollText.innerHTML = "--";
// });
