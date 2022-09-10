const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getInsult, getFortune, getBooks, deleteBook, createBook } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/insult", getInsult);
app.get("/api/fortune", getFortune);
app.get("/api/books", getBooks);
app.delete("/api/books/:id", deleteBook);
app.post("/api/create", createBook);

app.listen(4000, () => console.log("Server running on 4000"));
