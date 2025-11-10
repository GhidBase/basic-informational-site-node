import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    console.log("request made");
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");

    let path = "./pages/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
            return;
        }

        res.write(data);
        console.log("success");
        res.end();
        return;
    });
});

server.listen(8080, "localhost", () => {
    console.log("listening for requests on port 8080");
});
