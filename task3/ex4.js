var user = {name: "John",
            age: 35,
            spouse: {name: "Mary", age: 32}
}

function check(str, obj){
    for(let key in obj){
        if(!(obj.hasOwnProperty(str))) {
            obj[str] = 'new';
        } 
    }
    return obj;
}

console.log(check("spouse", user));