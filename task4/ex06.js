var str = "Anton is student";

function ucWords(str) {
    words = str.split(" ");
    var strWithCapitalFirstCharacterForEachWord = "";
    for (let i = 0; i < words.length; i++) {
        strWithCapitalFirstCharacterForEachWord += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    return strWithCapitalFirstCharacterForEachWord;
}

console.log(ucWords(str));