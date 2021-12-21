const removeFromArray = function() {
    let args = [...arguments];
    let array = args.shift();
    for (let i = 0; i < array.length; i++) {
        for (arg of args) {
            if (array[i] === arg) {
                array.splice(i,1);
                i--;
                continue;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
