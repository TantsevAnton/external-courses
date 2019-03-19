var user = {name: "John",
            age: 35,
            spouse: {name: "Mary", age: 32}
}

function print(obj){
    for(let key in obj){
        console.log(key,"-", obj[key]);
    }
}

print(user);