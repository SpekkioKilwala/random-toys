import _ from 'lodash';
import { testBOM} from './bom.js';

function inputBox(_id) {
	const element = document.createElement('div');
	const txt = document.createElement('input');
	txt.setAttribute('type', 'text');
	txt.setAttribute('id', _id);

	element.appendChild(txt);
	return element;
}

function pareSequence(e) {
	let input = e.target.value;
	console.log("input: " + input);

	const filter = /[^gcatGCAT ,.']/g;

	let output = input.replaceAll(filter, "");

	document.getElementById('sequence').value = output;
}


document.body.appendChild(inputBox("rawtext"));
document.body.appendChild(inputBox("sequence"));

document.getElementById('rawtext').addEventListener('change', pareSequence);


