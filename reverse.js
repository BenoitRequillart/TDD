function reverseString() {

    var splitString = 'hello'.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray;
}

module.exports = {reverseString}