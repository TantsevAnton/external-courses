var str = "anton";

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst(str));