
// ----------------------- Variables ----------------------------- //

var display = document.getElementById('display');
var digits = document.getElementsByClassName('numeric');
var solarPanel = document.getElementById('solarPanel');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;
var lastKeyPressed = '';
var broken = 2;

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
// ---------------------- Button Logic -------------------------- //

function ButtonLogic() {
	var keyLabel = this.innerHTML;
	if (this.classList.contains('numeric')) {
		numeric(keyLabel, lastKeyPressed);
	}
	else if (this.classList.contains('calculate')) {
		calculate();
	}
	else if (this.classList.contains('decimal')) {
		decimal(keyLabel, lastKeyPressed);
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
	else if (this.classList.contains('sign')) {
		sign(keyLabel);
	}
	lastKeyPressed = keyLabel;
}

// ---------------------- Computations -------------------------- //

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
				calculate();
				// store keyLabel in selectedOperator
				selectedOperator = keyLabel;
			}
		}
	}
}

function decimal(keyLabel, lastKey) {
	if (lastKey === '=') {
		allClear();
	}
	if (selectedOperator === '') {
		if (value1.indexOf('.') == -1) {
			if (value1 === '') {
				value1 = 0 + value1 + keyLabel;
			}
			else {
				value1 = value1 + keyLabel;
			}
			display.innerHTML = value1;
		}
	}


	else {
		if (value2.indexOf('.') == -1) {
			if (value2 === '') {
				value2 = 0 + value2 + keyLabel;
			}
			else {
				value2 = value2 + keyLabel;
			}
			display.innerHTML = value2;
		}
	}
}

function calculate() {
	var results = 0;

	switch(selectedOperator) {
		case "+":
			results = Number(value1) + Number(value2);
			break;

		case "-":
			results = Number(value1) - Number(value2);
			break;

		case "x":
			results = Number(value1) * Number(value2);
			break;

		case "÷":
			results = Number(value1) / Number(value2);
			break;

		default:
			alert("How did this happen?!?");
	}
	// store results of calculate in value1
	value1 = results;
	// update display with results of calculation (which is now value1)
	display.innerHTML = value1;
	// clear value2
	value2 = '';
	// clear selectedOperator
	selectedOperator = '';
}

function numeric(keyLabel, lastKey) {
	if (lastKey === '=') {
		allClear();
	}
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

function sign(keyLabel) {
	if (selectedOperator === '') {
		console.log(value1);
		sign = (Number(value1) *= -1);
		console.log(value1);
		display.innerHTML = value1;
		}
	else {
		value2 = properAppend(value2, keyLabel);
		value2 = (Number(value2) *= -1);
		display.innerHTML = value2;
		}

		//
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

function Surprise() {
	if (broken % 2 == 0) {
		solarPanel.style.backgroundImage = "url('broken.png')";
		broken++;
	}
	else {
		solarPanel.style.backgroundImage = "none";
		broken++;
	}
}