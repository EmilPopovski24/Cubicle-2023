//logikata na cube create i dobavqneto na cube kum starite cubes

const uniqid = require("uniqid");
const cubes = [];// keep the new data in array
//cubeData = name, description, difficultyLevel, imageUrl

exports.getAll = () => cubes.slice(); // za da vurnem masiva s nova referenciq

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };//adding ID to cubeData
   
    cubes.push(newCube); 

    return newCube;
};