// Don't remove this code
const container = document.querySelector(".container");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
 
 // js code to appear signup and login form
 signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});
/* Instructions:

You are tasked with creating functionality for a signup form where user data is collected and saved into variables, and then implementing a validation check during login to verify if the provided credentials are valid or not. The provided code contains HTML and JavaScript files within a folder. You are instructed not to modify the existing code in the index.js file. Instead, you are required to download the given folder and add your JavaScript code below the existing code in the index.js file to accomplish the task.

Using the Document Object Model (DOM), create functions to:

Collect user data from the signup form and store it in variables.
Implement a validation check during login to verify if the provided credentials match the saved data.
Ensure that your added code is properly commented and organized for clarity and readability.

*/

// Add your code here
