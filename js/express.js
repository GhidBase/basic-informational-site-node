import fs from "fs";
import express from "express";
import authorRouter from "../routes/authorRouter.js";
import bookRouter from "../routes/bookRouter.js";
import indexRouter from "../routes/indexRouter.js";

const app = express();
let path = "./pages/";

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
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

app.get("/:username/messages", (req, res) => {
    console.log(req.params);
    res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.end();
});

app.get("/{*splat}", (req, res) => {
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

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
// The app knows this to call this error handling middleware when the middleware receives 4 parameters
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("server running");
});
