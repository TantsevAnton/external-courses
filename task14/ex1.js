var Calculator = (function() {

    var _result = 0;

    function getResult() {
        return _result;
    }

    function reset() {
        _result = 0;
        return this;
    }

    function add(arg) {
        if (typeof arg !== "undefined") {
            _result = _result + arg;          
        }
        return this;
    }

    function subtract(arg) {
        if (typeof arg !== "undefined") {
            _result = _result - arg;         
        }
        return this;
    }

    function divide(arg) {
        if (typeof arg !== "undefined") {
            _result = _result / arg;        
        }
        return this;
    }

    function multiply(arg) {
        if (typeof arg !== "undefined") {
            _result = _result * arg;         
        }
        return this;
    }
    
    function setState(arg) {
        if (typeof arg !== "undefined") {
            _result = arg;          
        }
        return this;
    }

    function fetchData(callback) {
        Calculator.setState(500);
        setTimeout(callback, 1000);
    }

    return {
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
        setState: setState, 
        fetchData: fetchData 
    }
})();

console.log(Calculator.getResult()); 

Calculator.add(1);

console.log(Calculator.getResult()); 

Calculator.subtract(2);
Calculator.multiply(2);
Calculator.divide(2);

console.log(Calculator.getResult()); 

const result = Calculator.add(100)
    .multiply(2)
    .divide(20)
    .reset()
    .subtract(1)
    .getResult();

console.log(result);

Calculator.setState(1);

console.log(Calculator.getResult());

var callback = function() {
    console.log(Calculator.getResult());
}

Calculator.fetchData(callback);