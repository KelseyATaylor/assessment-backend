let books = require("./db.json");

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
};
