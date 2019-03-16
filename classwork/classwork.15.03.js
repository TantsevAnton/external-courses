var userProto = {
    getAge: function () {
        return this.age;
    },
    getName: function () {
        return this.name;
    },
    changeName: function (name) {
        this.name = name;
    },
    changeAge: function (age) {
        this.age = age;
    }
}

var employeeProto = {
    getJobTitle: function () {
        return this.jobTitle;
    },
    getSalary: function () {
        return this.salary;
    },
    promote(jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
}

var userAndEmployeeProto = {};
Object.assign(userAndEmployeeProto, userProto);
Object.assign(userAndEmployeeProto, employeeProto);

people1 = Object.create(userAndEmployeeProto);
people2 = Object.create(userAndEmployeeProto);
people3 = Object.create(userAndEmployeeProto);
people4 = Object.create(userAndEmployeeProto);

people1.changeName("Mary");
people2.changeAge(30);
people3.promote("Senior Developer", 100500);

console.log(people1);
console.log(people2);
console.log(people3);
console.log(people4);