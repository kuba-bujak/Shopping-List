// Get data
const productsList = document.querySelector('.products-list');
let counter = document.querySelector('.counter');
let removeBtns = document.querySelectorAll('.fa-solid');
let form = document.getElementById('form-products');
let productInput = document.getElementById('product-name');

// Set counter
function setCounter() {
	let products = document.querySelectorAll('.product');
	counter.textContent = products.length;
}

function changePriority(e) {
	let productClass = 'product';
	switch(e.target.className) {
		case 'product important':
			productClass = 'product realized';
			e.target.innerHTML = e.target.textContent + '<i class="fa-solid fa-trash"></i>';
			break;
		
		case 'product realized':
			itemDone(e);
			break;
		
		default:
			productClass = 'product important';
			break;
	}
	e.target.className = productClass;
	setCounter();
}

function getTarget(e) {
	return e.target;
}

function itemDone(e) {
	let target, elParent;
	target = getTarget(e);
	elParent = target.parentNode;

	elParent.removeChild(target);

	e.preventDefault();
}

productsList.addEventListener('click', function(e) {
	changePriority(e);
}, false);

productsList.addEventListener('DOMNodeInserted', setCounter);

form.addEventListener('submit', e => {
	e.preventDefault();
	let product = productInput.value;

	if (product == '') {
		product = 'New product';
	}
	
	newEl = document.createElement('li');
	newText = document.createTextNode(product);
	newEl.className = 'product';

	newEl.appendChild(newText);
	productsList.appendChild(newEl);
	productInput.value = '';
});
setCounter();


