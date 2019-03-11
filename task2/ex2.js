const arr = [100, "Anton", true];

function outputArrayElementsAndTheirNumber(arr) {
    var number = 0;                                           
    for (let value of arr) {
        console.log(value);
        number++; 
    }
    console.log(number);
}

outputArrayElementsAndTheirNumber(arr);
