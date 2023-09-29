import { filterBy } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

//Visualizar tarjetas
const root = document.getElementById("root");
root.appendChild(renderItems(data.athletes));

//Función que filtra por medallas

//athletesArray(data.athletes);

//filterBy(data.athletes, "medal", "Gold")
//filterBy(data.athletes, "medal", "Silver")
//filterBy(data.athletes, "medal", "Bronze")

//console.log(filterBy)

const selectMedal = document.querySelector ('select[name="medal"][data-testid="medal-filter"]');
//const medalGold = document.querySelector ('option[value="Gold"]');

selectMedal.addEventListener('change', (e) => {
  //llamando a función filtro medallas
  const filterGold = filterBy(data.athletes, "medal", e.target.value);
  root.innerHTML = "";
  root.appendChild(renderItems(filterGold));
 
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

/*
const medalSelect = document.querySelector('select [name="medal"] [data-testid="medal-select"]');

medalSelect.addEventListener('change', () => {

  // Llama a la función correspondiente dependiendo de la medalla seleccionada
 
  if (selectedMedal === "Gold") {
    filterBy(data.athletes, "medal", "Gold");
  } else if (selectedMedal === "Silver") {
    filterBy(data.athletes, "medal", "Silver");
  } else if (selectedMedal === "Bronze") {
    filterBy(data.athletes, "medal", "Bronze");
  }
  filterBy.innerHTML = 
});*/