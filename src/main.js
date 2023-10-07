import {filterBy, sortAtheltes, computeStat} from './dataFunctions.js';
import {renderItems} from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

//Visualizar tarjetas
const root = document.getElementById("root");
root.appendChild(renderItems(data.athletes));

const dataAthletes = data.athletes;
const selectMedal = document.querySelector ('select[name="medal"][data-testid="medal-filter"]');
const genderSelect = document.querySelector('select[data-testid="gender-filter"]');
const selectSort = document.querySelector('select[id="select-sort"][name="sort"][data-testid="select-sort"]');
const ageStatistics = document.getElementById('computeStat');
const resetButton = document.getElementById('clear');
let filteredAthletes = [...dataAthletes];

//llamando a función filtro medallas
selectMedal.addEventListener('change', (e) => {
  const filterMedal = filterBy(filteredAthletes, "medal", e.target.value);
  root.innerHTML = "";
  filteredAthletes = filterMedal;
  root.appendChild(renderItems(filteredAthletes))
  const statistics = computeStat(filteredAthletes);
  ageStatistics.innerHTML = "Average Age for Athletes: " + statistics;
});
//llamando a función filtro género
genderSelect.addEventListener("change",(e) => {
  const filterGender = filterBy(filteredAthletes,"gender",e.target.value);
  root.innerHTML = "";
  filteredAthletes = filterGender;
  root.appendChild (renderItems(filteredAthletes));
  const statistics = computeStat(filteredAthletes);
  ageStatistics.innerHTML = "Average Age for Athletes: " + statistics;
});
//llamando a función de orden asc y desc
selectSort.addEventListener("change",(e) => {
  const generalSort = sortAtheltes(filteredAthletes,"name",e.target.value);
  root.innerHTML = "";
  filteredAthletes = generalSort
  root.appendChild (renderItems(filteredAthletes));
  const statistics = computeStat(filteredAthletes);
  ageStatistics.innerHTML = "Average Age for Athletes: " + statistics;
});
//llamando a función de limpiar 
resetButton.addEventListener("click",() => {
  root.innerHTML = "";
  filteredAthletes = [...dataAthletes];
  root.appendChild (renderItems(filteredAthletes));
  selectMedal.value = "default";
  genderSelect.value = "default";
  const statistics = computeStat(filteredAthletes);
  ageStatistics.innerHTML = "Average Age for Athletes: " + statistics;
});
//llamando a función de estadística
const statistics = computeStat(filteredAthletes);
ageStatistics.innerHTML = "Average Age for Athletes: " + statistics;

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