function createUser(name, age) {
    return {name: name, age: age};
}

arrayOfUsers = [];

arrayOfUsers[0] = createUser("Anton", 20);
arrayOfUsers[1] = createUser("Alex", 19);
arrayOfUsers[2] = createUser("Nikita", 23);
arrayOfUsers[3] = createUser("Maxim", 28);
arrayOfUsers[4] = createUser("Mary", 22);
arrayOfUsers[5] = createUser("Elizabeth", 35);
arrayOfUsers[6] = createUser("Nina", 15);

for (let i = 0; i < arrayOfUsers.length;  i++) {
    if (arrayOfUsers[i].age == 23) {
        arrayOfUsers[i].name = "Igor";
        arrayOfUsers[i].age = 25;
        arrayOfUsers[i].salary = 30000;
    }
}

for (var i = 0; i < arrayOfUsers.length;  i++) {
    if (arrayOfUsers[i].name == "Mary") {
        delete arrayOfUsers[i].age;
        for (var j = 0; j < arrayOfUsers.length;  j++) {
            if (arrayOfUsers[j].name == "Igor") {
                arrayOfUsers[i].husband = arrayOfUsers[j];
            }
        }
    }
}

for (let user of arrayOfUsers) {
    console.log(user);
}
