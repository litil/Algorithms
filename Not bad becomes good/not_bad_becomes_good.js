/* Given a string, find the first appearance of the substring 'not' and 'bad'. If the 'bad' follows the 'not', replace the whole 'not'...'bad' substring with 'good'. Return the resulting string. So 'This dinner is not that bad!' yields: This dinner is good!
*/

function replaceNotBadByGood(myString){
    // check if "not" exists
    var indexOfNot = myString.indexOf('not');    
    if (indexOfNot == -1){
        return myString;
    } 
    
    // check if "bad" exists after not
    var stringFromNot = myString.substring(indexOfNot, string.length +1);
    var indexOfBadInSubstring = stringFromNot.indexOf("bad");
    if (indexOfBadInSubstring == -1){
        return myString;
    } 
    var indexOfBad = myString.indexOf("bad");
    
    // replace "not ... bad" by "good"
    var stringToBeReplaced = myString.substring(indexOfNot, indexOfBad + "bad".length);
    return myString.replace(stringToBeReplaced, "good");
}

var testString = [
        "This dinner is not that bad!", 
        "This dinner is bad not that !",
        "Hello John!"
    ];
    
testString.forEach(function(str){
    console.log(str + " > " + replaceNotBadByGood(str));
});
