const router = require('express').Router();
const cubeManager = require("../managers/cubeManager")
// const express = require("express");
// const router = express.Router();

router.get("/",(req, res) => {
    const cubes =  cubeManager.getAll();
    res.render('index', { cubes }); //podavam cubes na ender funkciqta, koqto gi podava na index
});

router.get("/about", (req, res) => {
    res.render('about')
});

module.exports = router;
 