var str = "Hello!!!";
   
function countNumberOfOccurrences(str) {
    if (str === "") {
        console.log("String is empty!!!");
    } else {
        var numberOfOccurrences = {};

        for (let i = 0; i < str.length; i++) {
            if (!(numberOfOccurrences.hasOwnProperty(str[i]))) {
                numberOfOccurrences[str[i]] = 1;
            } else {
                numberOfOccurrences[str[i]]++;
            }
        } 
    
        for (key in numberOfOccurrences) {
            console.log(key, " - ", numberOfOccurrences[key]);
        }
    }
}

countNumberOfOccurrences(str);