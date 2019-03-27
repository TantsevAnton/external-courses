function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function isBiggerThan4(element, index, array) {
    return element > 4;
}

var array = [1, 2, 3, 4, 5];
console.log(some(array, isBiggerThan4));