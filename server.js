const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");
const inventory = require("./public/inventory.json")

const Handlebars = require("handlebars");
Handlebars.registerHelper("json", function(context) {
    return JSON.stringify(context);
});

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
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
    res.render("index", {inventory: inventory}); 
});

app.get("/appointments", (req, res) => {
    res.render("appointments"); 
});

app.get("/shop", (req, res) => {
    res.render("shop", {inventory: inventory}); 
});

app.get("/styleparts", (req, res) => {
    res.render("styleparts", {inventory: inventory}); 
});

app.get("/stylepartitems", (req, res) => {
    const category = req.query.category
    res.render("stylepartitems", {inventory: inventory.car_inventory.styling_parts.items, category:category}); 
});

app.get("/performanceparts", (req, res) => {
    res.render("performanceparts", {inventory: inventory}); 
});

app.get("/performancepartitems", (req, res) => {
    const category = req.query.category
    res.render("performancepartitems", {inventory: inventory.car_inventory.performance_parts.items, category:category}); 
});

app.get("/gallery", (req, res) => {
    res.render("gallery"); 
});

app.get("/contact", (req, res) => {
    res.render("contact"); 
});

app.get("/login", (req, res) => {
    res.render("login"); 
});

app.listen(8080, () => {
    console.log("Server is starting at port ", 8080);
});
