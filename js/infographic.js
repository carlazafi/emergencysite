document
  .querySelector("#Frozenmoney")
  .addEventListener("click", infoFrozenmoney);

document.querySelector("#Clock").addEventListener("click", infoClock);

document
  .querySelector("#Rottentomato")
  .addEventListener("click", infoRottentomato);

function infoFrozenmoney() {
  console.log("infoFrozenmoney");
  document.querySelector(".info-text > h2").textContent = "På budget";
  document.querySelector(".placeholder").textContent = "SKRIV OM MAD PÅ BUDGET";
  document.querySelector("#efficiency").textContent =
    "Uden indkøb. Køb ikke mere ind, hvis du har varer i køleskabet";
  dosument.querySelector("#requirement").textContent =
    "Hvis du skal foretage indkøb billigt, så sørg for at tjekke kiloprisen på varene";
}

function infoClock() {
  console.log("infoClock");
  document.querySelector(".info-text > h2").textContent = "Tidspresset";
}

function infoRottentomato() {
  console.log("infoRottentomato");
  document.querySelector(".info-text > h2").textContent = "Mad der udløber";
}
