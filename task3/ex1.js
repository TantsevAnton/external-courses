var user = {};

user.name = "John";
user.age = 35;
user.spouse = {name: "Mary", age: 32};

console.log(user);

delete user.spouse;

console.log(user);