function checkIfElementsSameInArray(arr) {  
    for (var i = 0; i < arr.length; i++) {
        var number = 0;

        for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				number++;
            }
            
            if (number > 0) {
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

result = checkIfElementsSameInArray([2, 1, 3, 3, -1]);
console.log(result);

result = checkIfElementsSameInArray([true]);
console.log(result);