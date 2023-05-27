const cubes = [];// keep the new data in array
//cubeData = name, description, difficultyLevel, imageUrl
exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    const newCube = {
        id: cubes.length + 1,
        ...cubeData,
    };//adding ID to cubeData
   
    cubes.push(newCube); 

    return newCube;
};