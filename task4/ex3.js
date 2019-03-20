var str = " Anton is student ";

function trim(str) {
    if (str.charAt(0) === " ") {
        str = str.slice(1);
    }

    if (str.charAt(str.lenght - 1) === " ") {
        str = str.slice(0, -1);
    }
    return str;
}

console.log(trim(str));