var user1 = {name: "John",
            age: 35,
            spouse: {name: "Mary", age: 32}
}

function cloneObject(obj) {
    var clone = {}; 
    for (var key in obj) {
        clone[key] = obj[key];
    }
    return clone;
}

var user2 = cloneObject(user1);

console.log(user1);
console.log(user2);

user2.name = "Alex";
user2.spouse.name = "Nina";

console.log(user1);
console.log(user2);