import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/athletes/athletes.js';

//console.log(example, renderItems, data);//

const athletes = renderItems(data.athletes)
console.log(athletes)

