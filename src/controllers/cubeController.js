const router = require("express").Router();

const cubeManager = require("../managers/cubeManager");

//path is already /cubes as per index.js app.use
router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", (req, res) => {
    
    const { 
        name, 
        description, 
        imageUrl, 
        difficultyLevel,
    } = req.body;
    
    console.log(req.body)

    cubeManager.create({
        name, 
        description, 
        imageUrl, 
        difficultyLevel : Number(difficultyLevel),
    });

    res.redirect("/");
});

router.get("/:cubeId/details", (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId)
    res.render("details", { cube });
});

module.exports = router;