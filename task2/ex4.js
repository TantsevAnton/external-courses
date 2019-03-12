function checkIfElementsSameInArray(arr) {  
    for (var i = 0; i < arr.length; i++) {
        var number = 0;

        for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				number++;
            }
            
            if (number > 1) {
                return true;
            }
        } 
    }

    return false;
}

var result = checkIfElementsSameInArray([1, "Anton"]);
console.log(result);

result = checkIfElementsSameInArray([3, 3, 3, 2]);
console.log(result);

result = checkIfElementsSameInArray([]);
console.log(result);

result = checkIfElementsSameInArray([true]);
console.log(result);