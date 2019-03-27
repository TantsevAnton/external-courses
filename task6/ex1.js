function slice(array, begin, end) {
    if (typeof begin === "undefined") {
        begin = 0;
    }

    if (typeof end === "undefined") {
        end = array.length;
    }

    if (end < 0) {
        end = array.length + end;
    }
    
    if (begin < 0) {
        begin = array.length + begin;    
    }

    var newArray = [];

    for (let i = begin; i < end; i++) {
        newArray[i - begin] = array[i];    
    }

    return newArray;
}

var array = [1, 2, 3, 4, 5];
console.log(slice(array, -3));