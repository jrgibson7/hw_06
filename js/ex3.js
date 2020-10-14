/*  Homework 6
    Example 3 Javascript code
*/

console.log("Gibson's Output from Example 3");

var items = document.getElementsByTagName('p');
for (i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = 'yellow';
}
