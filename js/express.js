import fs from "fs";
import express from "express";

const app = express();
let path = "./pages/";

app.get("/", (req, res) => {
    fs.readFile(path + "index.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.type("html");
        res.send(data);
    });
});

app.get("/404", (req, res) => {
    fs.readFile(path + "404.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.type("html");
        res.send(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile(path + "about.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.type("html");
        res.send(data);
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile(path + "contact-me.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.type("html");
        res.send(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile(path + "about.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.type("html");
        res.send(data);
    });
});

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("server running");
});
