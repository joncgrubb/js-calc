var display = document.getElementById('display');
var digits = document.getElementsByClassName('numeric');
var solarPanel = document.getElementById('solarPanel');
var keys = document.getElementsByClassName('key');

var value1;
var value2;
var selectedOperator;

// Wait for page to load...

document.onreadystatechange = function() {
	if (document.readyState === "interactive") {
		
		for (i = 0; i < keys.length; i++) {
			keys[i].addEventListener("click", ButtonLogic);
		}
		solarPanel.addEventListener("click", Surprise);
	}
};

function ButtonLogic() {

	var keyLabel = this.innerHTML;

	//console.log(this.classList.contains('numeric'));

	if (this.classList.contains('numeric')) {
		if (display.innerHTML === "0") {
		display.innerHTML = keyLabel;
		}
		else {
		display.innerHTML = display.innerHTML + keyLabel;
		}
		value1 = value1 + keyLabel;
	}
	else if (this.classList.contains('decimal')) {
		
		if (value1.indexOf('.') == -1) {
			// If it's decimal, append to display and save into value1
			display.innerHTML = display.innerHTML + keyLabel;
			value1 = value1 + keyLabel;
		}
		else {
			// If not ignore it.
		}
	}
	else if (this.classList.contains('operator')) {
		alert("Operator");
	}
	else if (this.classList.contains('allclear')) {
		allClear();
	}
	else if (this.classList.contains('clear')) {
		clear();
	}
}

function clear() {
	if (selectedOperator === '') {
		value1 = '';
	}
	else {
		value2 = '';
	}
}

function allClear() {
	value1 = '';
	value2 = '';
	selectedOperator = '';

	display.innerHTML = "0";
}

function Surprise() {
	alert("It's a solar panel...");
}