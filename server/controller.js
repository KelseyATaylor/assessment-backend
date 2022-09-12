let books = require("./db.json");
let globalID = 3;

const weapons = ["Lightsaber", "The One Ring", "The Elder Wand"];

module.exports = {
	getCompliment: (req, res) => {
		const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

		// choose random compliment
		let randomIndex = Math.floor(Math.random() * compliments.length);
		let randomCompliment = compliments[randomIndex];

		res.status(200).send(randomCompliment);
	},

	getInsult: (req, res) => {
		const insults = ["You're less cool.", "You just aight.", "I like you, but I like your dog better."];

		let randomIndex = Math.floor(Math.random() * insults.length);
		let randomInsult = insults[randomIndex];

		res.status(200).send(randomInsult);
	},

	getFortune: (req, res) => {
		const fortune = [
			//For you, Kyle :)
			"Life before death.",
			"Strength before weakness.",
			"Journey before destination.",
			"[You] will protect those who cannot protect themselves.",
			"[You] will protect even those that [you] hate, so long as it is right.",
			"[You] accept that there will be those [you] cannot protect.",
		];

		let randomIndex = Math.floor(Math.random() * fortune.length);
		let randomFortune = fortune[randomIndex];

		res.status(200).send(randomFortune);
	},

	getBooks: (req, res) => {
		res.status(200).send(books);
	},

	deleteBook: (req, res) => {
		let index = books.findIndex((elem) => elem.id === +req.params.id);
		books.splice(index, 1);
		res.status(200).send(books);
	},

	createBook: (req, res) => {
		const { title, author, imageURL } = req.body;
		let newBook = {
			title,
			author,
			imageURL,
			id: globalID,
		};
		books.push(newBook);
		globalID++;
		res.status(200).send(books);
	},

	getWeapons: (req, res) => {
		res.status(200).send(weapons);
	},

	addWeapon: (req, res) => {
		let { item } = req.body;
		weapons.push(item);

		res.status(200).send(weapons);
	},

	deleteWeapon: (req, res) => {
		let index = res.params.id;

		weapons.splice(index, 1);

		res.status(200).send(weapons);
	},

	editWeapon: (req, res) => {
		let index = req.params.id;

		let { item } = req.body;

		weapons.splice(index, 1, item);

		res.status(200).send(weapons);
	},
};
