// Grabbing HTML elements
const result = document.querySelector('#result');
const increment = document.querySelector('#increment');

let currentCounter = 'numbers';

// Add Event Listener
if (currentCounter === 'numbers') {
	document.addEventListener('click', numberCounter);
} else if (currentCounter === 'alphabets') {
	document.addEventListener('click', alphabetCounter);
}

// Optional
const optionsDiv = document.querySelector('#options');

optionsDiv.addEventListener('click', (event) => {
	if (event.target.id === 'reset-btn') {
		increment.value = 1;
	} else if (event.target.id === 'numbers' && currentCounter === 'alphabets') {
		document.addEventListener('click', numberCounter);
		document.removeEventListener('click', alphabetCounter);
		result.textContent = '0';
		increment.value = 1;
		currentCounter = 'numbers';
	} else if (event.target.id === 'alphabets' && currentCounter === 'numbers') {
		document.removeEventListener('click', numberCounter);
		document.addEventListener('click', alphabetCounter);
		result.textContent = 'A';
		increment.value = 1;
		currentCounter = 'alphabets';
	}
});

// Increment functions
function numberCounter(event) {
	if (event.target.id === 'increase') {
		result.textContent =
			parseInt(result.textContent) + parseInt(increment.value);
	} else if (event.target.id === 'decrease') {
		result.textContent =
			parseInt(result.textContent) - parseInt(increment.value);
	}

	if (parseInt(result.textContent) < 0) {
		result.style.color = 'red';
	} else {
		result.style.color = 'black';
	}
}

function alphabetCounter(event) {
	if (event.target.id === 'increase' && result.textContent !== 'Z') {
		result.textContent = String.fromCharCode(
			result.textContent.charCodeAt(0) + parseInt(increment.value)
		);
	} else if (event.target.id === 'decrease' && result.textContent !== 'A') {
		result.textContent = result.textContent = String.fromCharCode(
			result.textContent.charCodeAt(0) - parseInt(increment.value)
		);
	}
}
