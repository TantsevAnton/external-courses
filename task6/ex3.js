function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!(callback(array[i], i, array))) {
            return false;
        }
    }
    return true;
}

function isBiggerThan4(element, index, array) {
    return element > 4;
}

var array = [1, 2, 3, 4, 5];
console.log(every(array, isBiggerThan4));