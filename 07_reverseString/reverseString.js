const reverseString = function(string) {
    let textHolder = [];
    for (let i = string.length; i >= 0 ; i--) {
        textHolder.push(string[i]);
    }
    return reverse = textHolder.join("");
};

// Do not edit below this line
module.exports = reverseString;
