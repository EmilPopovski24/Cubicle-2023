//logikata na cube create i dobavqneto na cube kum starite cubes

const uniqid = require("uniqid");
const cubes = [];// keep the new data in array
//cubeData = name, description, difficultyLevel, imageUrl

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if(search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    };

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    };

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    };

    return result;
}; // za da vurnem masiva s nova referenciq

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };//adding ID to cubeData
   
    cubes.push(newCube); 

    return newCube;
};