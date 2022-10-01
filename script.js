//3- Storing all of the user values inside of an array
let entries = [];
//5- This constant is for pushing the new entries at the end of the ul
const entriesWrapper = document.querySelector("#entries");

//4- Pushing the array items onto the end of the ul
function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.appendChild(listValue);

  entriesWrapper.appendChild(listItem);
}
//line 9: Create a new element in the DOM (listItem)
//line 10: Create a value from the new entry
//line 11: Append in the list value into the listItem(Grab the value and place it inside of the new element)
//line 13: The same than line 11, but grabbing the listItem and appending it in inside the entriesWrapper
//line 8: Grab the entries wrapper which is the ul, and remove the first item every time we create a new one at the end

//6- The function reducer takes in the two values(total and current value) and reduces the array values into one single value adding the current values to the total
function reducer(total, currentValue) {
  return total + currentValue;
}

//7- This function grabs all of the entries, use a reduce method and then update the value next to "Total" and at the end in "Weekly target"
function calcTotal() {
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById("total").innerText = totalValue;
  document.getElementById("progressTotal").innerText = totalValue;
}
//8- Grab all of the total values which the user has added together and divide them by the number of entries
function calcAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.getElementById("average").innerText = average;
}


//2- Capturing the user's input, converting the string type value of the input into a number
function handleSubmit(event) {
  event.preventDefault();
  const entry = Number(document.querySelector("#entry").value);
  if (!entry) return;
  document.querySelector("form").reset();
  entries.push(entry);
  addNewEntry(entry);
  calcTotal();
  calcAverage();
}
//line 23: preventDefault will prevent the default behavior of the form submission which is to reload the browser
//line 26: Grabbing the form and calling the reset method, which is going to clear all of the form inputs

//1- Reference of the form. Listening the submit button
const form = document.querySelector("form").addEventListener("submit", handleSubmit);