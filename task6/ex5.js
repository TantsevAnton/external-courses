function map(array, callback) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i, array);
    }
    return newArray;
}

function calculateSquareRoot(element, index, array) {
    return Math.sqrt(element);
}

var array = [4, 9, 16, 25, 36];
console.log(map(array, calculateSquareRoot));