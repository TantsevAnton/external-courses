function User (name, age) {
    this.name = name;
    this.age = age;
    this.getAge = function() {
        return this.age;
    }
    this.getName = function() {
        return this.name;
    }
    this.changeName = function(name) {
        this.name = name;
    }
    this.changeAge = function(age) {
        this.age = age;
    }
}

function Employee (jobTitle, salary) {
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.getJobTitle = function() {
        return this.jobTitle;
    },
    this.getSalary = function() {
        return this.salary;
    },
    this.isFired = function(){
        if (this.fired === true) {
            return true;
        }
    },
    this.promote = function(jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    },
    this.setFired = function() {
        this.fired = true;
    } 
}

var usersArray = [];
usersArray[0] = new User("Anton", 20);
usersArray[1] = new User("Alex", 19);
usersArray[2] = new User("John", 23);
usersArray[3] = new User("Maxim", 28);
usersArray[4] = new User("Mary", 22);
usersArray[5] = new User("Elizabeth", 35);

var employeesArray = [];
employeesArray[0] = new Employee("Senior Developer", 100500);
employeesArray[1] = new Employee("Director", 777777);
employeesArray[2] = new Employee("Junior Developer", 40000);
employeesArray[3] = new Employee("Middle Developer", 75000);
employeesArray[4] = new Employee("iChar", 50000);
employeesArray[5] = new Employee("Cook", 65999);

for (var i = 0; i < usersArray.length;  i++) {
    if (usersArray[i].name === "Mary") {
        console.log(usersArray[i].name, "exists!!!");
    }
}

for (var i = 0; i < usersArray.length;  i++) {
    if (usersArray[i].age < 30) {
        console.log(usersArray[i].name, " - ", usersArray[i].age);
    }
}

for (let i = 0; i < usersArray.length;  i++) {
    if (usersArray[i].name === "Mary") {
        for (let j = 0; j < usersArray.length;  j++) {
            if (usersArray[j].name === "John") {
                usersArray[i].husband = usersArray[j];
            }
        }
        console.log(usersArray[i]);
    }
}

for (let i = 0; i < employeesArray.length;  i++) {
    sumOfAllSalaries = employeesArray[i].salary++
}
var averageSalary = sumOfAllSalaries / employeesArray.length; 
console.log(averageSalary);

for (let i = 0; i < employeesArray.length;  i++) {
    console.log(employeesArray[i].jobTitle);
}

// console.log(Math.max(...employeesArray.salary));
// console.log(Math.min(...employeesArray.salary));
