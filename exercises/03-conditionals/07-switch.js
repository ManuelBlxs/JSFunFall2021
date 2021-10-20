let monthNum = "10"; // e.g.

/**
 * You are going to convert a month in its number form (e.g. 1 or "01")
 * into the month as text.
 * "monthNum" represents the given month as a number.
 * Create a variable called "monthText".
 * It should convert "monthNum" into the month as text.
 * If you cannot convert "monthNum" into text, than "monthNum" should be null.
 *
 * @example
 * If "monthNum" is "03", then "monthText" should be "March".
 * If "monthNum" is "12", then "monthText" should be "December".
 * If "monthNum" equals anything else, then "monthText" should be null.
 *
 * You must use a switch statement to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
// With switch statements
let monthText="null"
switch (monthNum) {
case "01" || "1":
    monthText="January";
    break;
case "02" || "2":
    monthText="February";
    break;
case "03" || "3":
    monthText="March";
    break;
case "04" || "4":
    monthText="April";
    break;
case "05" || "5":
    monthText="May";
    break;
case "06" || "6":
    monthText="June";
    break;
case "07" || "7":
    monthText="July";
    break;
case "08" || "8":
    monthText="August";
    break;
case "09" || "9":
    monthText="September";
    break;
case "10":
    monthText="October";
    break;
case "11":
    monthText="November";
    break;
case "12":
    monthText="December";
    break;
  default:
    monthText=null;
}
