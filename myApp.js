const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>HELLO THERE</h1>");
});


app.get("/:technology", function (req, res) {

    const technology = req.params.technology;
    const lists = [
        {
            title: "Why declare functions with expressions?",
            by: "Lakelava"
        },
        {
            title: "What's the point of *this*?",
            by: "-am-self-taught"
        },
        {
            title: "Help! Using Phonegap. making multiple pages, each including controlled playback of audio.",
            by: "RedFeather520"
        },
        {
            title: "complete newbie here, could anyone fill in this template to add \"&disable_polymer=true\" to any youtube link please?",
            by: "Huskar"
        }
    ];

    res.render("home.ejs", {lists: lists, technology: technology});
});

app.listen(3000);