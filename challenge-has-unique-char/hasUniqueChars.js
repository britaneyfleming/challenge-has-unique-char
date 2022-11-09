//Given a word, return true if that word contains only unique characters. Return false otherwise.

//For example:

//hasUniqueChars("Monday")
// returns true

//hasUniqueChars("Moonday")
// returns false

//Uppercase and lowercase letters should be considered separately:
//hasUniqueChars("Bob")
// returns true

// Write your code below

function uniqueChars(word){
    let unique = new Set([])
    for(let i = 0; i < word.length; i++){
    unique.add(word[i])
}
return unique.size === word.length
}