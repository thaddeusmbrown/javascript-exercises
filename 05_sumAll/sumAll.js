const sumAll = function(int1, int2) {
    let sumOutput=0;
    if (int1 < 0 || int2 < 0 || typeof int1 != "number" || typeof int2 != "number") {
        return "ERROR"
    } else if (int1 < int2) {
        for (i=int1; i<=int2;i++) {
            sumOutput+=i;
        }
        return sumOutput;
    } else if (int2 < int1) {
        for (i=int2; i<= int1; i++) {
            sumOutput+=i;
        }
        return sumOutput;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
