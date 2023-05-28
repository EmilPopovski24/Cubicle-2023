const path = require('path'); //absoluten put
const express = require('express');
//Express configuration
// app.use(express.static("src/public")); 
function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, "../public"))); 
    app.use(express.urlencoded({extended:false})); //parse-va body and query string
};
//all static files are in public folder, path.resolve if it's not working

module.exports = expressConfig;