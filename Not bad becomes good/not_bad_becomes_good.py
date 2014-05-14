def replaceString(myString):
    message = myString;
    
    try:
        indexOfNot = myString.index('not');
        
        try:
            indexOfBad = myString[indexOfNot:].index('bad');
            print indexOfBad;
            message += " > " + myString.replace(myString[indexOfNot:indexOfNot + indexOfBad + 3], "good");            
        except ValueError:
            message += " > " + "Sorry, but we can't find bad after not in this sentence";        
        
    except ValueError:
        message += " > " + "Sorry, but we can't find not in this sentence";
        
    print message + "\n";


myStringOK = "This dinner is not that bad";
myStringNotOK1 = "This dinner is bad not that ";
myStringNotOK2 = "Hello world!";
replaceString(myStringOK);
replaceString(myStringNotOK1);
replaceString(myStringNotOK2);