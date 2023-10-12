// Grabbing HTML elements
const result = document.querySelector('#result');
const increment = document.querySelector('#increment');

// Add Event Listener
console.log(increment);
document.addEventListener('click', (event) => {
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
});
