const voteprompts = require('prompt-sync')();

const voteage  : number = voteprompts('Enter the your age:');

if (!isNaN(voteage)) {
    if(voteage < 18) {
        console.log(`Sorry you are not eligible to cast the vote.`);
    }    
    else {
        console.log(`You are eligible to cast the vote.`);
    }   
} 
else {
    console.log('Invalid input. Please enter valid age.');
}