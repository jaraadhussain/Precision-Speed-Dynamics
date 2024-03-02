const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");

app.use(express.static("public"))

app.engine("handlebars", engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index"); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.listen(8080, () => {
    console.log("Server is starting at port ", 8080);
});
