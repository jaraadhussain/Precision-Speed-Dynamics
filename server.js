const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");
const inventory = require("./public/inventory.json")

const Handlebars = require("handlebars");
Handlebars.registerHelper("json", function(context) {
    return JSON.stringify(context);
});

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

app.get("/appointments", (req, res) => {
    res.render("appointments"); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.get("/shop", (req, res) => {
    res.render("shop", {inventory: inventory}); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

console.log(inventory)

app.get("/styleparts", (req, res) => {
    res.render("styleparts", {inventory: inventory}); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.get("/performanceparts", (req, res) => {
    res.render("performanceparts", {inventory: inventory}); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.get("/gallery", (req, res) => {
    res.render("gallery"); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.get("/contact", (req, res) => {
    res.render("contact"); // Assuming 'main' is your default layout and you have index.handlebars within the views folder if needed
});

app.listen(8080, () => {
    console.log("Server is starting at port ", 8080);
});
