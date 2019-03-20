var str = "Anton is student";

function convertSringTolowerCamelCase(str) {
    words = str.split(" ");
    strInlowerCamelCaseNotation = words[0].charAt(0).toLowerCase() + words[0].slice(1);
    for (let i = 1; i < words.length; i++) {
        strInlowerCamelCaseNotation += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return strInlowerCamelCaseNotation;
}

console.log(convertSringTolowerCamelCase(str));