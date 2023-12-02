const numberprompts = require('prompt-sync')();

const numbertochecck  : number = numberprompts('Enter the your number:');


if (!isNaN(numbertochecck)) {
    if(numbertochecck == 0) {
        console.log(`your given number ${numbertochecck} is zero`);
    }
    else if(numbertochecck > 0) {
        console.log(`your given number ${numbertochecck} is positive`);
    }
    else {
        console.log(`your given number ${numbertochecck} is negative`);
    }   
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}