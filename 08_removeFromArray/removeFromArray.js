const removeFromArray = function(array, ...numbersToDelete) {
    return array.filter(item => !numbersToDelete.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
