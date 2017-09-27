// ----------------------- Variables ----------------------------- //

var display = document.getElementById('display');
var digits = document.getElementsByClassName('numeric');
var solarPanel = document.getElementById('solarPanel');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;

// ----------------- Wait for page to load ----------------------- //

document.onreadystatechange = function() {
	if (document.readyState === "interactive") {
		
		for (i = 0; i < keys.length; i++) {
			keys[i].addEventListener("click", ButtonLogic);
		}
		solarPanel.addEventListener("click", Surprise);
		allClear();
	}
};
// --------------------------------------------------------------- //

function ButtonLogic() {

	var keyLabel = this.innerHTML;

	//console.log(this.classList.contains('numeric'));

	if (this.classList.contains('numeric')) {
		numeric(keyLabel);
	}
	else if (this.classList.contains('calculate')) {
		calculate();
	}
	else if (this.classList.contains('decimal')) {
		decimal(keyLabel);
	}
	else if (this.classList.contains('operator')) {
		operator(keyLabel);
	}
	else if (this.classList.contains('allclear')) {
		allClear();
	}
	else if (this.classList.contains('clear')) {
		clear();
	}
}

function numeric(keyLabel) {
		if (selectedOperator === '') {
			value1 = properAppend(value1, keyLabel);
			display.innerHTML = value1;
		}
		else {
			value2 = properAppend(value2, keyLabel);
			display.innerHTML = value2;
		}
}

function properAppend(main, added) {
	if (main === "0") {
		return added;
		}
	return main + added;
}

function decimal(keyLabel) {
	if (value1.indexOf('.') == -1) {
			// If it's decimal, append to display and save into value1
			display.innerHTML = display.innerHTML + keyLabel;
			value1 = value1 + keyLabel;
		}
	else {
			// If not ignore it.
		}
}

function operator(keyLabel) {
	if (value1 === '') {
		// set value1 = 0
		value1 = 0;
		// store keyLabel in selectedOperator
		selectedOperator = keyLabel;
	}
	else {
		if (selectedOperator === '') {
			// store keyLabel in selectedOperator
			selectedOperator = keyLabel;
		}
		else {
			if (value2 === '') {
				// store keyLabel in selectedOperator
				selectedOperator = keyLabel;
			}
			else {
				// calculate!
				// store results of calculate in value1
				// update display with results of calculation (which is now value1)
				// clear value2
				value2 = '';
				// store keyLabel in selectedOperator
				selectedOperator = keyLabel;
			}
		}
	}
}

function clear() {
	if (selectedOperator === '') {
		value1 = '';
		display.innerHTML = "0";
	}
	else {
		value2 = '';
		display.innerHTML = "0";
	}
}

function allClear() {
	value1 = '';
	value2 = '';
	
	selectedOperator = '';
	display.innerHTML = "0";
}

function calculate() {
	var results = 0;

	switch(selectedOperator) {
		case "+":
			results = Number(value1) + Number(value2);
		case "-":
			results = Number(value1) - Number(value2);
		case "x":
			results = Number(value1) * Number(value2);
		case "&divide;":
			results = Number(value1) / Number(value2);
		default:
			alert("How did this happen?!?");
	}
}

function Surprise() {
	alert("It's a solar panel...");
}