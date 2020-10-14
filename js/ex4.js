/*  Homework 6
    Example 4 Javascript code
*/

console.log("Gibson's Output from Example 4");
const cobLink = document.createElement('li');
cobLink.id = "cob"
cobLink.textContent = "College of Business"
cobLink.innerHTML = "<a href=\"https://www.csulb.edu/college-of-business\">College of Business</a>"
document.getElementById("Links").insertBefore(cobLink, document.getElementById("ISpage"))
