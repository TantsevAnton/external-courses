function insert(str, insertedStr, wordNumber) {
    words = str.split(" ");
    words.splice(wordNumber, 0, insertedStr);
    return words.join(" ");
}

console.log(insert('I am cool', 'very', 1));
