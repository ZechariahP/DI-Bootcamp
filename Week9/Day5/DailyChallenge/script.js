//Create a function that:

//takes in two strings as two parameters
//and returns a boolean that indicates whether or not the first string is an anagram of the second string.
//Do we need to consider whitespace?
//Trim whitespace prior to comparison.

function isAnagram(test, original){
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
}
console.log(isAnagram("hello", "llohe")) //Expected: true
console.log(isAnagram("bye", "hey")) //Expected: false
//Some Help

//What is an anagram?
//An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


//Example of anagrams

//"Astronomer" is an anagram of "Moon starer"
//"School master" is an anagram of "The classroom"
//"The Morse Code" is an anagram of "Here come dots"



