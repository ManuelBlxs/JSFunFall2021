/**
 * Create a function named called "printGreeting".
 * It should accept a name and return "Hello ______!"
 * @example printGreeting("Tim"); // Hello Tim!
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let firstName="Manuel"
const printGreeting = (firstName) => {
    return("Hello" + " " + firstName + "!");
};
console.log(printGreeting(firstName))
