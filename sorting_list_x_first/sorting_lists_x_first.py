#Given a list of strings, return a list with the strings
# in sorted order, except group all the strings that begin with 'x' first.
# e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
# ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
# Hint: this can be done by making 2 lists and sorting each of them
# before combining them.

def sortStrings(listStrings):
    listStringsX = [];
    
    for str in listStrings:
        if str[0] == 'x':
            listStringsX.append(str)
            listStrings.remove(str)
        
    print sorted(listStringsX);
    print sorted(listStrings);


listStrings =  ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'];
sortStrings(listStrings)
