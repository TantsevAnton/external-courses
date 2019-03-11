function f(arr) {
    var numberOfEven = 0;
    var numberOfOdd = 0;
    var numberOfZero = 0;

    for (let value of arr) {
        if (value === 0) {
            numberOfZero++;
        } else if (value % 2 === 0) {
            numberOfEven++;
        } else {
            numberOfOdd++;
        }
    }

    if (numberOfZero !== 0) {
        console.log("четных: ", numberOfEven, ";", "нечетных: ", numberOfOdd, ";", "нуль: ", numberOfZero);
    } else {
        console.log("четных: ", numberOfEven, ";", "нечетных: ", numberOfOdd);    
    }

    return [numberOfEven, numberOfOdd, numberOfZero]; 
}

var result = f([1, 2, 3, 4]);
console.log(result);

result = f([1, 2, 3, 0]);
console.log(result);