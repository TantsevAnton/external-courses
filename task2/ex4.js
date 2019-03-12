function checkIfElementsSameInArray(arr) {  
    let bool = false;

    for (var i = 0; i < arr.length; i++) {
        var numberOccurrences = 0;

        for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				numberOccurrences++;
			}
        }
        
        if (numberOccurrences > 1) {
            bool = true;
            break;
        } 
    }

    return bool;
}

var result = checkIfElementsSameInArray([1, "Anton"]);
console.log(result);

result = checkIfElementsSameInArray([3, 3, 3, 2]);
console.log(result);

result = checkIfElementsSameInArray([]);
console.log(result);

result = checkIfElementsSameInArray([true]);
console.log(result);