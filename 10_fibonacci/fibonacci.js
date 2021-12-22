const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let lastNum = 0;
    let fib = 1;
    for (let i = 2; i <= num; i++) {
        fib += lastNum;
        lastNum = fib - lastNum;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
