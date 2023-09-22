import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

const root = document.getElementById("root");
root.appendChild(renderItems(data.athletes));



const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})