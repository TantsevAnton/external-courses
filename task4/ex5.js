var str1 = "Anton is student";
var str2 = "student";

function includes(str1, str2) {
    if (~str1.indexOf(str2)) {
        return true;
    } else {
        return false;
    }    
}

console.log(includes(str1, str2));