const cubeprompts = require('prompt-sync')();

function calculateCubeVolume(sideLength: number): number {
    return Math.pow(sideLength, 3);
}
const sideLength  : number = cubeprompts('Enter the side length of the cube:');


if (!isNaN(sideLength)) {
    const volume = calculateCubeVolume(sideLength);
    console.log(`The volume of the cube with side length ${sideLength} is: ${volume}`);
} else {
    console.log('Invalid input. Please enter valid numeric values for side length.');
}