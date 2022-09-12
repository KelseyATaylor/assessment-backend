const baseURL = "http://localhost:4000";

//STEP 1: SELECT HTML ELEMENT
//Declared. Tied to the index.html
const complimentBtn = document.getElementById("complimentButton");
const insultBtn = document.getElementById("insultButton");
const fortuneBtn = document.getElementById("fortuneButton");
const bookContainer = document.getElementById("books-container");
const form = document.querySelector("form");

const getWeaponsBtn = document.getElementById("getWeapons");
const weaponRack = document.getElementById("displayWeapons");

const addForm = document.getElementById("addForm");
const addInput = document.getElementById("addInput");

const deleteForm = document.getElementById("deleteForm");
const deleteInput = document.getElementById("deleteInput");

const editForm = document.getElementById("editForm");
const editIndex = document.getElementById("editIndex");
const editInput = document.getElementById("editInput");

//Other declared
const errCallback = (err) => console.log(err.response.data);

//STEP 2: WRITE FUNCTIONS
//Axios requests

const getCompliment = () => {
	axios.get("http://localhost:4000/api/compliment/").then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getWeapons = () => {
	axios
		.get(`${baseURL}/api/weapons`)
		.then((res) => {
			console.log(res.data);
			const weapons = res.data;
			weaponRack.innerHTML = "";

			for (let i = 0; i < weapons.length; i++) {
				let newWeapon = document.createElement("li");
				newWeapon.textContent = weapons[i];
				weaponRack.appendChild(newWeapon);
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

const addNewItem = (event) => {
	event.preventDefault();

	let bodyObject = {
		item: addInput.value,
	};

	axios
		.post(`${baseURL}/api/addWeapon`, bodyObject)
		.then((res) => {
			console.log(res.data);

			const weapons = res.data;
			weaponRack.innerHTML = "";

			for (let i = 0; i < weapons.length; i++) {
				let newWeapon = document.createElement("li");
				newWeapon.textContent = weapons[i];
				weaponRack.appendChild(newWeapon);
			}
			addInput.value = "";
		})
		.catch((err) => {
			console.log(err);
		});
};

const deleteItem = (event) => {
	event.preventDefault();

	axios.delete(`${baseURL}/api/deleteWeapon/${deleteInput.value}`).then((res) => {
		const weapons = res.data;
		weaponRack.innerHTML = "";

		for (let i = 0; i < weapons.length; i++) {
			let newWeapon = document.createElement("li");
			newWeapon.textContent = weapons[i];
			weaponRack.appendChild(newWeapon);
		}
		deleteInput.value = "";
	});
};

const editItem = (e) => {
	e.preventDefault();
	let bodyObj = {
		item: editInput.value,
	};

	axios.put(`${baseURL}/api/editWeapon/${editIndex.value}`, bodyObj).then((res) => {
		const weapons = res.data;
		weaponRack.innerHTML = "";

		for (let i = 0; i < weapons.length; i++) {
			let newWeapon = document.createElement("li");
			newWeapon.textContent = weapons[i];
			weaponRack.appendChild(newWeapon);
		}
		editIndex.value = "";
		editInput.value = "";
	});
};

const getInsult = () => {
	axios.get("http://localhost:4000/api/insult/").then((res) => {
		const data = res.data;
		alert(data);
	});
};

const getFortune = () => {
	axios.get("http://localhost:4000/api/fortune").then((res) => {
		const data = res.data;
		alert(data);
	});
};

//Show current database books
const booksCallback = ({ data: books }) => showBooks(books);
const getAllBooks = () => axios.get("http://localhost:4000/api/books").then(booksCallback).catch(errCallback);

//Delete a book
const deleteBook = (id) => {
	axios.delete(`http://localhost:4000/api/books/${id}`).then(booksCallback).catch(errCallback);
	alert(`Your book has been deleted!`);
};

//Create a book

const createBook = (body) => {
	axios.post("http://localhost:4000/api/create", body).then(booksCallback).catch(errCallback);
	// alert(`Your book has been created!`);
};

const submitHandler = (event) => {
	event.preventDefault();

	let title = document.getElementById("title");
	let author = document.getElementById("author");
	let imageURL = document.getElementById("img");

	let bodyObj = {
		title: title.value,
		author: author.value,
		imageURL: imageURL.value,
	};

	createBook(bodyObj);

	title.value = "";
	author.value = "";
	imageURL.value = "";
};

const createBookDisplay = (books) => {
	const bookDisplay = document.createElement("div");
	bookDisplay.classList.add("book-display");

	bookDisplay.innerHTML = `
    <p>Title: ${books.title}</p>
    <p>By: ${books.author}</p>
    <img alt="book cover" src=${books.imageURL} class="book-cover"/>
    
	<button onclick="deleteBook(${books.id})">Delete</button>
    `;

	bookContainer.appendChild(bookDisplay);
};

//Show a book
const showBooks = (arr) => {
	bookContainer.innerHTML = ``;
	for (let i = 0; i < arr.length; i++) {
		createBookDisplay(arr[i]);
	}
};

//STEP 3: COMBINE WITH EVENT LISTENER
//Event Listeners
complimentBtn.addEventListener("click", getCompliment);
insultBtn.addEventListener("click", getInsult);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitHandler);

getWeaponsBtn.addEventListener("click", getWeapons);
addForm.addEventListener("submit", addNewItem);
deleteForm.addEventListener("submit", deleteItem);
editForm.addEventListener("submit", editItem);

getAllBooks();
