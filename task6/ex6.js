function reduce(array, callback, initialValue) {
    if (typeof initialValue !== "undefined") {
        for (let i = 0; i < array.length; i++) {
            initialValue = callback(initialValue, array[i], i, array);
        }
    } else {
        var initialValue = array[0];  
        for (let i = 1; i < array.length; i++) {
            initialValue = callback(initialValue, array[i], i, array);
        }       
    }
    return initialValue;
}

function calculateSum(sum, element, index, array) {
    return sum + element;
}

var array = [4, 9, 16, 25, 36];
console.log(reduce(array, calculateSum));