import _ from 'lodash';
import { testBOM } from './bom.js';
import { combatants, elo } from './matchup.js';

// function inputBox(_id) {
// 	const element = document.createElement('div');
// 	const txt = document.createElement('input');
// 	txt.setAttribute('type', 'text');
// 	txt.setAttribute('id', _id);

// 	element.appendChild(txt);
// 	return element;
// }

// function pareSequence(e) {
// 	let input = e.target.value;
// 	console.log("input: " + input);

// 	const filter = /[^gcatGCAT ,.'?]/g;

// 	let GCAT = input.replaceAll(filter, "");
// 	let singleSpaced = GCAT.replaceAll(/[ ]+/g, " ")

// 	document.getElementById('sequence').value = singleSpaced;
// }


// document.body.appendChild(inputBox("rawtext"));
// document.body.appendChild(inputBox("sequence"));

console.log(combatants);
console.log(elo);
// rightclick object in the console and make it a global variable to manipulate it

// document.getElementById('rawtext').addEventListener('change', pareSequence);


