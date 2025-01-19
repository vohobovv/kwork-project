let btn = document.querySelectorAll('#faqBtn')
let faqContainer = document.querySelectorAll('#faqContainer')
let faqTop = document.querySelectorAll('#faqTop')

btn.forEach(function (item, index) {
	item.addEventListener('click', function () {
		faqContainer[index].classList.toggle('hidden')
		faqTop[index].classList.toggle('pb-0')
		faqTop[index].classList.toggle('pb-5')
		item.classList.toggle('rotate-0')
	})
})

/*
if (document.querySelector('#formOpenBtn')) {
	let formBtn = document.querySelector('#formCloseBtn');
	let formOpenBtn = document.querySelector('#formOpenBtn');
	let formBox = document.querySelector('#formBox');
	let formBoxOutLine = document.querySelector('#formBox > div');

	if (localStorage.getItem('isRegister') === 'true') {
		console.log('User is already registered, not showing the form.');
		formBox.classList.add('hidden');
	} else {
		formBox.classList.add('hidden');
	}

	formBtn.addEventListener('click', function () {
		formBox.classList.add('hidden');
	});

	formBoxOutLine.addEventListener('click', function () {
		formBox.classList.add('hidden');
	});

	formOpenBtn.addEventListener('click', function () {
		formBox.classList.remove('hidden');
	});

	document.querySelector('#registerBtn')?.addEventListener('click', function () {
		localStorage.setItem('isRegister', 'true'); 
		formBox.classList.add('hidden');
		console.log('User registered successfully!');
	});
} else {
	console.log("Elements not found!");
} */


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active")
	navMenu.classList.remove("active")
}))