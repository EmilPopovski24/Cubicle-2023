const express = require("express");

const app = express();
const PORT = 5000;

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController");

//Express configuration
expressConfig(app);
//require('./config/expressConfig')(app);; //other syntax

//Handlebars configuration
handlebarsConfig(app);

app.use(homeController);
app.use("/cubes", cubeController); //only if the path starts with /cubes

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));