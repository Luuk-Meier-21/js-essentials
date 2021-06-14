// Main JavaScript file 

// 1. Basis principes

// ** Constant declarations (values that do not change)

// String ('this' or "this")
const studentName = 'Luuk Meier';
// Number     
const randomNumber = 43;    

// ** Variable declarations (values that can change)

// Boolean (true or false)
let isSittingUp = true;
// Number
let age = 22;
// Array (a group of things seperated by a comma)				
let interests = [
	'Having fun with friends',
	'Scripting'
];	

// ** Calling the functions
show('Hallo');
isScripting();
button();
onScroll(400);
parallax('.fig-red', 0.5, 0.25);
parallax('.fig-blue', 0.3, 0.6);
parallax('.fig-green', 0.1, 0.3);

// ** If else statements
function isScripting() {
	let isScripting = true;

	if(isScripting) {
		console.log('Scripting!')
	} else {
		console.log('Not Scripting')
	}
}

// ** Console logging
function show(message) {
	console.log('Person:')
	console.log(studentName);
	console.log(randomNumber);
	console.log(isSittingUp);
	console.log(age);
	console.log(interests);

	console.log('Message: ' + message);
}

// 2. Document Object Model

// ** Query selector & Innerhtml
function button() {
	const button = document.querySelector('.like-button');

	if(button) {
		button.addEventListener('click', function() {
			button.innerHTML = 'Liked';
		})
	}
}


// ** On scroll trigger & adding classes
function onScroll(scrollPos) {
	const body = document.querySelector('body');

	if(body) {
		document.addEventListener('scroll', function(e) {
			if(scrollPos < window.scrollY) {
				body.style.backgroundColor = 'pink';
			} else {
				body.style.backgroundColor = 'white';
			}
		})
	}
}

// ** Parallax DOM manipulation
function parallax(className, multiplierX, multiplierY) {
	const element = document.querySelector(className);

	if(element) {
		document.addEventListener('scroll', function(e) {
			console.log('hi')
			const scrollX = window.scrollX * multiplierX;
			const scrollY = window.scrollY * multiplierY;

			element.style.transform = 'translate(' + scrollX + 'px, ' + scrollY + 'px)';
		})
	}
}

 