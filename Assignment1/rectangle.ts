const prompts = require('prompt-sync')();

function calculateRectangleArea(lengths:number, widths:number) {
    return lengths * widths;
}

const lengths : number = prompts('Enter the length of the rectangle: ');
const widths : number = prompts('Enter the width of the rectangle: ');

// Check if the input is valid numbers
if (!isNaN(lengths) && !isNaN(widths)) {
    const area = calculateRectangleArea(lengths, widths);
    console.log(`The area of the rectangle with length ${lengths} and width ${widths} is: ${area}`);
} else {
    console.log('Invalid input. Please enter valid numeric values for length and width.');
}