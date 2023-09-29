import { filterBy } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

//Visualizar tarjetas
const root = document.getElementById("root");
root.appendChild(renderItems(data.athletes));

const selectMedal = document.querySelector ('select[name="medal"][data-testid="medal-filter"]');
const genderSelect = document.querySelector("select[data-testid='gender-filter']");

selectMedal.addEventListener('change', (e) => {
  //llamando a función filtro medallas
  const filterMedal = filterBy(data.athletes, "medal", e.target.value);
  root.innerHTML = "";
  root.appendChild(renderItems(filterMedal));
});

genderSelect.addEventListener("change",(e) => {
  console.log(e.target.value);
  const filterGender = filterBy(data.athletes,"gender",e.target.value);
  root.innerHTML = "";
  root.appendChild (renderItems(filterGender));
});

//Interacción y eventos para menú responsive
const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
})

close.addEventListener("click", () => {
  nav.classList.remove("visible");
})
