const palindromes = function (string) {
    const stripped = string
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .split(' ').join('').toLowerCase();
    const split = stripped.split('');
    const reversed = split.reverse();
    const joined = reversed.join('');
    return stripped == joined;

};

// Do not edit below this line
module.exports = palindromes;
