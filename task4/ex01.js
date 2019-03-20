var man = {name: "John", age: 35};

var employee = Object.create(man);

employee.specialty = "programmer";
employee.salary = 50000;

function check(str, obj){
    bool = false;
    for(let key in obj){
        if(((key == str) && !(obj.hasOwnProperty(str)))) {
            return str;
        }
    }
    return "Свойство " + str + " в прототипе переданного объекта не существует"
}

console.log(check("salary", employee));