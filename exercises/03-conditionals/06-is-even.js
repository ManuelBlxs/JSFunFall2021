let num = 8; // e.g.

/**
 * Create a variable called "isEven". (Do not use var.)
 * If "num" is even, "isEven" should be true.
 * Otherwise, "isEven" should be false.
 * Your answer should still work when "num" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isEven=true;
let test=num%2;
if (num>1 && test===0);{
    isEven=true
}if (num===0) {
    isEven=true
} if (num===1 || num===-1) {
    isEven=false
} if (num<0 && test===0) {
    isEven=true
} if (test!==0) {
    isEven=false
}