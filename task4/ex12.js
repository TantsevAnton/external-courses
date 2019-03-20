var number1 = 1.3325463256;
var number2 = -2.445243567346; 

function sumTwoNumbers(number1, number2) {
    return +(number1 + number2).toFixed(3);
}

console.log(sumTwoNumbers(number1, number2));