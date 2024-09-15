const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let num1 = 0;
let num2 = 0;

app.get("/", (req, res) => {
	res.send(`
    <div>
    <h1> ${num1}</h1>
    <a href="/add">Add for 1</a>
    <a href="/subtract">Subtract from 1</a>
    </div>
    <div>
    <h1>${num2}</h1>
    <a href="/add2">Add for 2</a>
    <a href="/subtract2">Subtract from 2</a>
    </div>
`);
});

app.get("/add", (req, res) => {
	num1++;
	res.redirect("/");
});

app.get("/subtract", (req, res) => {
	num1--;
	res.redirect("/");
});

app.get("/add2", (req, res) => {
	num2++;
	res.redirect("/");
});

app.get("/subtract2", (req, res) => {
	num2--;
	res.redirect("/");
});

/*
let data = {
	name: "John Doe",
	hobbies: ["coding", "reading", "travelling"],
};

app.get("/", (req, res) => {
	res.render("home", { data: data });
});

let list = {
	numbers: [1, 2, 3, 4, 5],
};
app.get("/list", (req, res) => {
	res.render("forlist", { list: list });
});
 * */

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
