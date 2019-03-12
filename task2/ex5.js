function defineMaximum(arr) {
    var Maximum = arr[0];
    for (let value of arr) {
        if (value > Maximum) {
            Maximum = value;
        }
    }
    return Maximum;
}

var result = defineMaximum([1, 2, -3, 4]);
console.log(result);