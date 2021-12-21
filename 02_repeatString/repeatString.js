const repeatString = function(string, num) {
    let stringOutput = '';
    if (num<0) {
        return 'ERROR';
    }
    for (let i=0; i < num; i++) {
        stringOutput += string;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
