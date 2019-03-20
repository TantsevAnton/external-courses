var str = "Anton is student";

function reverse(str) {
    chars = str.split("");
    var length = chars.length;
    for (let i = 0; i < length / 2; i++) {
        let temp = chars[i];
        chars[i] = chars[length - i - 1];
        chars[length - i - 1] = temp;
    }
    return chars.join("");
}

console.log(reverse(str));