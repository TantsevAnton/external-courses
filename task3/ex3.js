var user = {name: "John",
            age: 35,
            spouse: {name: "Mary", age: 32}
}

function check(str, obj){
    if(obj.hasOwnProperty(str)) {
        return true;
    } else{
        return false;
    }
}

console.log(check("spouse", user));