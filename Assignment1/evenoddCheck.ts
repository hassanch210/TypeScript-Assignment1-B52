const evenoddprompts = require('prompt-sync')();

const evenoddnumber  : number = evenoddprompts('Enter the your number:');


if (!isNaN(evenoddnumber)) {
    if(evenoddnumber % 2 == 0) {
        console.log(`your given number ${evenoddnumber} is Even`);
    }    
    else {
        console.log(`your given number ${evenoddnumber} is Odd`);
    }   
} 
else {
    console.log('Invalid input. Please enter valid numeric value.');
}