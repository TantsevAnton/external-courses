var Calculator = (function() {

    var _result = 0;

    return {

        getResult: function() {
            return _result;
        },
    
        reset: function() {
            _result = 0;
            return _result;
        },
    
        add: function(arg) {
            if (typeof arg === "undefined"){
                arg = 0;           
            }
    
            _result = _result + arg;
    
            return function f(arg) {
                if (typeof arg === "undefined"){
                    arg = 0;           
                }
    
                _result = _result + arg;
    
                return f;
            }
        },
    
        subtract: function(arg) {
            if (typeof arg === "undefined"){
                arg = 0;           
            }
    
            _result = _result - arg;
    
            return function f(arg) {
                if (typeof arg === "undefined"){
                    arg = 0;           
                }
    
                _result = _result - arg;
    
                return f;
            }
        },
    
        divide: function(arg) {
            if (typeof arg === "undefined"){
                arg = 1;           
            }
    
            _result = _result / arg;
    
            return function f(arg) {
                if (typeof arg === "undefined"){
                    arg = 1;           
                }
    
                _result = _result / arg;
    
                return f;
            }
        },
    
        multiply: function(arg){
            if (typeof arg === "undefined"){
                arg = 1;           
            }
    
            _result = _result * arg;
    
            return function f(arg) {
                if (typeof arg === "undefined"){
                    arg = 1;           
                }
    
                _result = _result * arg;
    
                return f;
            }
        }  
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