const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  const total = array.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((product, num) => {
    return product*num;
  }, 1);
  return total;

};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
	let factored = 1;
  if (num == 0) {
    return 1;
  } else {
    for (let i = 1; i<=num; i++) {
      factored = factored * i;
    }
  }
  return factored;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
