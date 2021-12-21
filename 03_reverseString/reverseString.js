const reverseString = function(str) {
    let stringOutput = '';
    for (let i=str.length - 1; i>=0; i--) {
        stringOutput += str[i];
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = reverseString;
