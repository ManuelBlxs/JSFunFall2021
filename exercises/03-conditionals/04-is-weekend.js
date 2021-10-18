let day = "Saturday";

/**
 * Create a variable called "isWeekend". (Do not use var.)
 * If "day" is Saturday or Sunday, "isWeekend" should be true.
 * Otherwise "isWeekend" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "day" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let isWeekend=true;
if (day="Saturday" || "Sunday"){
    isWeekend=true
} else (day= "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday");{
    isWeekend=false
}console.log(isWeekend)