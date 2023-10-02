import { filterBy, sortAtheltes} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

//Visualizar tarjetas
const root = document.getElementById("root");
root.appendChild(renderItems(data.athletes));

const dataAthletes = data.athletes;
const selectMedal = document.querySelector ('select[name="medal"][data-testid="medal-filter"]');
const genderSelect = document.querySelector('select[data-testid="gender-filter"]');
const selectSort = document.querySelector('select[id="select-sort"][name="sort"][data-testid="select-sort"]');
const ascSort = document.querySelector('option[value="asc"]');
const resetButton = document.getElementById('clear');
let filteredAthletes = [...dataAthletes];

selectMedal.addEventListener('change', (e) => {
  //llamando a función filtro medallas
  const filterMedal = filterBy(filteredAthletes, "medal", e.target.value);
  root.innerHTML = "";
  filteredAthletes = filterMedal;
  root.appendChild(renderItems(filteredAthletes));
});

genderSelect.addEventListener("change",(e) => {
  console.log(e.target.value);
  const filterGender = filterBy(filteredAthletes,"gender",e.target.value);
  root.innerHTML = "";
  filteredAthletes = filterGender;
  root.appendChild (renderItems(filteredAthletes));
});


selectSort.addEventListener("change",(e) => {
  console.log(e.target.value);
  const generalSort = sortAtheltes(filteredAthletes,"name",e.target.value);
  root.innerHTML = "";
  filteredAthletes = generalSort
  root.appendChild (renderItems(filteredAthletes));
});

resetButton.addEventListener("click",(e) => {
  root.innerHTML = "";
  filteredAthletes = [...dataAthletes];
  root.appendChild (renderItems(filteredAthletes));
  selectMedal.value = "default";
  genderSelect.value = "default";
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
