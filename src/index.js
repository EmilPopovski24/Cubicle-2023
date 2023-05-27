const express = require("express");

const app = express();
const PORT = 5000;

//Express configuration
const expressConfig = require("./config/expressConfig");
expressConfig(app);
//require('./config/expressConfig')(app);; //other syntax

//Handlebars configuration
const handlebarsConfig = require("./config/handlebarsConfig");
handlebarsConfig(app);

//Routes
app.get("/", (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));