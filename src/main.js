import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';
import athletes from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//


const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})