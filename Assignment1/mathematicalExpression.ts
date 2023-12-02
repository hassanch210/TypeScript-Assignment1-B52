function calculateExpression(): number {
    const result = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
    return result;
}

// Calculate and display the result
const finalResult = calculateExpression();
console.log(`The result of the expression is: ${finalResult}`);