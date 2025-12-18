const removeFromArray = function(array, ...args) {
    let newArray = Array.from(array);
    let filteredArray = newArray.filter((item) => !args.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
