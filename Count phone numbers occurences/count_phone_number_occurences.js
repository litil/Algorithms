/* Given a list of phone numbers, display, for each of them, the number of occurences
*/

function constructHashMap(listPhoneNumbers){
    
    if (!listPhoneNumbers){
        return null;
    }
    
    // this object will store data like : {"022 45456" , 12}
    var map = [];
        
    listPhoneNumbers.forEach(function (entry) {
        if (map[entry] !== undefined){
            // there is already an entry in our map
            // increment the counter
            map[entry]++;
        } else {
            map[entry] = 1;
        }
    });
    
    return map;
}

var listPhoneNumbersEmpty = [];
var listPhoneNumbersOK = [
        "202-555-0108",
        "202-555-0108",
        "202-555-0108",
        "202-555-0178",  
        "202-555-0105", 
        "202-555-0149", 
        "202-555-0108", 
        "202-555-0178", 
        "202-555-0149",  
        "202-555-0105",
        "202-555-0108", 
        "202-555-0178", 
        "202-555-0108", 
        "202-555-0199",
        "202-555-0105", 
        "202-555-0105"
    ];
    
console.log(constructHashMap(listPhoneNumbersEmpty));
console.log(constructHashMap(listPhoneNumbersOK));
    