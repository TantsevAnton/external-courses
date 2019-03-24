var Calculator = (function() {

    var _result = 0;

    function getResult() {
        return _result;
    }

    function reset() {
        _result = 0;
        return _result;
    }

    function add(arg) {
        if (typeof arg === "undefined"){
            arg = 0;           
        }

        _result = _result + arg;

        return add;
    }

    function subtract(arg) {
        if (typeof arg === "undefined"){
            arg = 0;           
        }

        _result = _result - arg;

        return subtract;
    }

    function divide(arg) {
        if (typeof arg === "undefined"){
            arg = 1;           
        }

        _result = _result / arg;

        return divide;
    }

    function multiply(arg){
        if (typeof arg === "undefined"){
            arg = 1;           
        }

        _result = _result * arg;

        return multiply;
    } 

    return {
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply 
    }
})();

console.log(Calculator.getResult()); 

Calculator.add(1)();

console.log(Calculator.getResult()); 

Calculator.subtract()(2)()();
Calculator.multiply()(2)(3)();
Calculator.divide()(2);

console.log(Calculator.getResult()); 

console.log(Calculator.reset());