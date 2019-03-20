var str = "Anton is student";
var maxlength = 8;

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + "..." : str;
}

console.log(truncate(str, maxlength));