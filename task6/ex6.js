function reduce(array, callback, initialValue) {
    if (typeof initialValue !== "undefined") {
        var index = 0; 
    } else {
        var initialValue = array[0]; 
        var index = 1; 
    }

    for (let i = index; i < array.length; i++) {
        initialValue = callback(initialValue, array[i], i, array);
    }  

    return initialValue;
}

function calculateSum(sum, element, index, array) {
    return sum + element;
}

var array = [4, 9, 16, 25, 36];
console.log(reduce(array, calculateSum));