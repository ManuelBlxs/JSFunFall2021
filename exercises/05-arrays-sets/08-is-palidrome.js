/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (string) => {
  const reversestring = string.split("").reverse("").join("");
  console.log(reversestring)
  if (reversestring===string){
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("madam"))
// IGNORE THIS BELOW. It is for the tests.

export default isPalindrome;
