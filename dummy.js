// This is a dummy JavaScript file. It doesn't do anything functional
// for the to-do list application, but it demonstrates how you
// might include and structure additional JavaScript code.

console.log("This message is from dummy.js!");

// You could define variables here that might be used elsewhere
const dummyVariable = "Hello from dummy!";

// You could also define dummy functions
function dummyFunction(input) {
  console.log("Dummy function received:", input);
  return input + " processed by dummyFunction";
}

// You might even have event listeners here, although they won't
// interact with the current HTML structure of the to-do list
document.addEventListener('DOMContentLoaded', function() {
  console.log("dummy.js DOM is ready!");
});

// This function is defined but not called in the to-do list's script.js
function anotherDummyFunction() {
  alert("This is an alert from the second dummy function!");
}

// You could simulate fetching data (though it wouldn't persist)
function fetchDummyData() {
  console.log("Simulating fetching data...");
  setTimeout(function() {
    const data = { message: "Dummy data loaded!" };
    console.log("Dummy data:", data);
  }, 1500); // Simulate a 1.5-second delay
}

fetchDummyData(); // Call the dummy data fetching function

// You can also have simple logic
if (Math.random() > 0.5) {
  console.log("Dummy condition was true!");
} else {
  console.log("Dummy condition was false!");
}

// This is just to show different types of content you might have
// in a more complex JavaScript file. It doesn't directly enhance
// the functionality of the basic to-do list we created.
