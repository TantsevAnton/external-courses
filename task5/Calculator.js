var Calculator = {

    result: 0,

    getResult: function() {
        return this.result;
    },

    reset: function() {
        this.result = 0;
        return this.result;
    },

    add: function(arg) {
        if (typeof arg === "undefined"){
            arg = 0;           
        }

        this.result = this.result + arg;

        return function f(arg) {
            if (typeof arg === "undefined"){
                arg = 0;           
            }

            Calculator.result = Calculator.result + arg;

            return f;
        }
    },

    subtract: function(arg) {
        if (typeof arg === "undefined"){
            arg = 0;           
        }

        this.result = this.result - arg;

        return function f(arg) {
            if (typeof arg === "undefined"){
                arg = 0;           
            }

            Calculator.result = Calculator.result - arg;

            return f;
        }
    },

    divide: function(arg) {
        if (typeof arg === "undefined"){
            arg = 1;           
        }

        this.result = this.result / arg;

        return function f(arg) {
            if (typeof arg === "undefined"){
                arg = 1;           
            }

            Calculator.result = Calculator.result / arg;

            return f;
        }
    },

    multiply: function(arg){
        if (typeof arg === "undefined"){
            arg = 1;           
        }

        this.result = this.result * arg;

        return function f(arg) {
            if (typeof arg === "undefined"){
                arg = 1;           
            }

            Calculator.result = Calculator.result * arg;

            return f;
        }
    }
}

console.log(Calculator.getResult()); 

Calculator.add(1)();

console.log(Calculator.getResult()); 

Calculator.subtract()(2)()();
Calculator.multiply()(2)(3)();
Calculator.divide()(2);

console.log(Calculator.getResult()); 

console.log(Calculator.reset());

