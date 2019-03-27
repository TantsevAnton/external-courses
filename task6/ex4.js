function filter(array, callback) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]); 
        }
    }
    return newArray;
}

function isBiggerThan4(element, index, array) {
    return element > 4;
}

var array = [1, 2, 3, 4, 5];
console.log(filter(array, isBiggerThan4));