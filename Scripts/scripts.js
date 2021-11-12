const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

/*================================== Declaring the functions which return random parts ================*/
function getUppercase(){
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase(){
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
	return symbols[Math.floor(Math.random() * symbols.length)];
}

/*==================================== Event Listener for clicking the generate button ================*/
generateEl.addEventListener('click', ()=>{
	generatePassword();
})

/*===================================== Function for generating the password ==========================*/
function generatePassword(){
	let passwordnow = "";
	const len = lenEl.value;

	for(var i=0; i<len; i++){
		const x = generateX();
		passwordnow += x;
	}

	pwEl.innerText = passwordnow;
}

/*============================== Function for generating each of passwords character ===================*/
function generateX(){
	const xnow = [];

	if(upperEl.checked){xnow.push(getUppercase());}
	if(lowerEl.checked){xnow.push(getLowercase());}
	if(numbersEl.checked){xnow.push(getNumber());}
	if(symbolsEl.checked){xnow.push(getSymbol());}

	if(xnow.length === 0){ return ""; }

	return xnow[Math.floor(Math.random() * xnow.length)];
}

/*========================= Event listener for copying the password to clipboard ============================*/
copyEl.addEventListener('click', ()=>{
	const textArea = document.createElement('textarea');
	const password = pwEl.innerText;

	if(!password){ return; }

	textArea.value = password;
	document.body.appendChild(textArea);
	textArea.select();

	document.execCommand('copy');
	textArea.remove();
	alert('Password is copied to clipnoard');
})