let fullName = "John smith"; // e.g.

/**
 * You will change the value of "fullName" below. Capitalize the first letter of the the last name within "fullName". "fullName" below should be equal to your answer.
 *
 * @example
 * let fullName = "John smith"; // e.g.
 * The new value for "fullName" should result in "John Smith".
 *
 * Your answer should still work when "fullName" is equal to a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let space = fullName.indexOf(" ");
let firstName = fullName.substring(0, space);
let lastNameInitial = fullName.substring(space + 1, space + 2);
let lastName = lastNameInitial.toUpperCase() + fullName.substring(space + 2);
fullName = firstName + " " + lastName;
console.log(fullName)