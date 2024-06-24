/* You are tasked with writing a function `solution` 
that takes a string `S` as input. 
The string consists of 'a' and/or 'b' characters. 
The function should return `true` if all occurrences 
of the letter 'a' appear before all occurrences 
of the letter 'b' in the string `S`. 
If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
the function should also return `true`. 
Otherwise, it should return `false`.


aabb - true
bbaa - false
aaa - true
bbb - true
ababa - false
*/

function solution(S) {
    let a = S.indexOf('a')
    let b = S.indexOf('b')
    if (a === -1 || b === -1) {
        return true
    } else if (a > b) {
        return false
    } else if (S.lastIndexOf('a') > S.lastIndexOf('b')) {
        return false
    } else {
        return false
    }
}

console.log(solution('abba'))