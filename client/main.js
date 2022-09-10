const complimentBtn = document.getElementById("complimentButton");
const insultBtn = document.getElementById("insultButton");
const fortuneBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
	axios.get("http://localhost:4000/api/compliment/").then((res) => {
		const data = res.data;
		alert(data);
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

const createBook = (body) => axios.post("http://localhost:4000/api/book", body).then();

const submitHandler = (event) => {
	event.preventDefault();

	let title = document.querySelector("#title");
	let imgURL = document.querySelector("#imgURL");
};

complimentBtn.addEventListener("click", getCompliment);
insultBtn.addEventListener("click", getInsult);
fortuneBtn.addEventListener("click", getFortune);
