/* Elementer - konstante, hvor der er givet et navn */
const clock = document.querySelector("#Clock");
const money = document.querySelector("#Frozenmoney");
const tomato = document.querySelector("#Rottentomato");
/* Knapper */
const btn_clock = document.querySelector("#btn_clock");
const btn_money = document.querySelector("#btn_money");
const btn_tomato = document.querySelector("#btn_tomato");

/* Elemter der er omskiftelige */
let active_part;

/* Eventlisteners */
money.addEventListener("click", infoMoney);
clock.addEventListener("click", infoClock);
tomato.addEventListener("click", infoTomato);

btn_clock.addEventListener("click", infoClock);
btn_money.addEventListener("click", infoMoney);
btn_tomato.addEventListener("click", infoTomato);

/* Funktioner for infoboxe */
function infoMoney() {
  console.log("infoMoney");
  document.querySelector(".info-text > h2").textContent = "På budget";
  document.querySelector(".placeholder").textContent =
    "SU, sparsommelig eller bare en fattigrøv? Uanset hvad er det muligt at lave lækre ting med få penge";
  document.querySelector("#efficiency").textContent =
    "Uden indkøb. Køb ikke mere ind, hvis du har varer i køleskabet";
  document.querySelector("#requirement").textContent =
    "Hvis du skal foretage indkøb billigt, så sørg for at tjekke kiloprisen på varene";
  active_part = "money";
  money.style.filter = "brightness(1.4) drop-shadow(1px 1px 3px black)";
  de_light();
}

function infoClock() {
  console.log("infoClock");
  document.querySelector(".info-text > h2").textContent = "Tidspresset";
  document.querySelector(".placeholder").textContent = "Hvis du er tidspresset";
  document.querySelector("#efficiency").textContent =
    "Undgår indkøb og lav retter der ikke skal ovnbages";
  document.querySelector("#requirement").textContent =
    "Det er vigtigt at forholde sig i ro";
  /* vis at elementet er aktivt: */
  active_part = "clock";
  clock.style.filter = "brightness(1.4) drop-shadow(1px 1px 3px black)";
  de_light();
}

function infoTomato() {
  console.log("infoTomato");
  document.querySelector(".info-text > h2").textContent = "Mad der udløber";
  document.querySelector(".placeholder").textContent = "SMID IKKE MAD UD";
  document.querySelector("#efficiency").textContent =
    "Selvom der er råd på mad, er der meget der stadig kan bruges. Du skal benytte metoden: lugt, kig og smag, inden du kasserer madvarer";
  document.querySelector("#requirement").textContent =
    "Du hjælper med at nedsætte madspild og sparer selv penge ved at bruge fødevarer til sit fudle!";
  /* vis at elementet er aktivt: */
  active_part = "tomato";
  tomato.style.filter = "brightness(1.4) drop-shadow(1px 1px 3px black)";
  de_light();
}

/* Highlight ved mouseover */
btn_clock?.addEventListener("mouseover", highlightClock);
btn_money?.addEventListener("mouseover", highlightMoney);
btn_tomato?.addEventListener("mouseover", highlightTomato);

btn_clock?.addEventListener("mouseout", de_light);
btn_money?.addEventListener("mouseout", de_light);
btn_tomato?.addEventListener("mouseout", de_light);

/* Fukntioner for knapper */
function highlightClock() {
  clock.style.filter = "brightness(1.4)";
}
function highlightMoney() {
  money.style.filter = "brightness(1.4)";
}
function highlightTomato() {
  tomato.style.filter = "brightness(1.4)";
}

/* Delight der gør dem neutrale hvis ikke de er aktive */
function de_light() {
  if (active_part !== "clock") {
    clock.style.filter = "";
  }
  if (active_part !== "tomato") {
    tomato.style.filter = "";
  }
  if (active_part !== "money") {
    money.style.filter = "";
  }
}
