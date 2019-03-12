function checkIfElementsSameInArray(arr) {
    if (arr.length >= 2) {
        let bool = true;
        for (let value of arr) {
            if (value !== arr[0]) {
                bool = false;
                break;
            }
        }
        return bool;       
    } else {
        return "The length of the array is less than two! Comparison is meaningless!"
    }
}

var result = checkIfElementsSameInArray([1, "Anton"]);
console.log(result);

result = checkIfElementsSameInArray([3, 3, 3, 3]);
console.log(result);

result = checkIfElementsSameInArray([]);
console.log(result);

result = checkIfElementsSameInArray([true]);
console.log(result);