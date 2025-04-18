// emailjs.init("hvD2IoYefk2FlBl2P");

// // Get the HTML and input elements.
// const contactForm = document.getElementById("contact-form");
// const messageStatus = document.getElementById("message-status");
// const messageSent = document.getElementById("message-sent");
// const submitButton = document.getElementById("submit-button");
// const phoneInput = document.getElementById("phone");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");

// // Functions to validate phone input.
// function validatePhone() {
//   const phonePattern = /^[0-9+\-\s]+$/;

//   // Trim the whitespace from the phone input.
//   const phone = phoneInput.value.trim(); 

//   /** Test is the phone input value matches the phone pattern.
//    * If no the error message is shown. 
//    * If yes, hides the error message.
//    * */ 
//   if (!phonePattern.test(phone)) {
//     phoneInput.nextElementSibling.hidden = false;
//     return false;1
//   } else {
//     phoneInput.nextElementSibling.hidden = true;
//     return true;
//   }
// }

// // Functions to validate email input.
// function validateEmail() {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const email = emailInput.value.trim();

//   /** Test is the email input value matches the email pattern.
//    * If no the error message is shown. 
//    * If yes, hides the error message.
//    * */ 
//   if (!emailPattern.test(email)) {
//     emailInput.nextElementSibling.hidden = false;
//     return false;
//   } else {
//     emailInput.nextElementSibling.hidden = true;
//     return true;
//   }
// }

// // Functions to validate message input.
// function validateMessage() {
//   const message = messageInput.value.trim();

//   /** Checks if the messgae input is empty.
//    * If empty, the error message is shown. 
//    * If not empty, hides the error message.
//    * */ 
//   if (!message) {
//     messageInput.nextElementSibling.hidden = false;
//     return false;
//   } else {
//     messageInput.nextElementSibling.hidden = true;
//     return true;
//   }
// }


// // Add input and blur event listeners to required fields
// phoneInput.addEventListener("blur", validatePhone);
// emailInput.addEventListener("blur", validateEmail);
// messageInput.addEventListener("blur", validateMessage);

// // Add a submit event listener to the form
// contactForm.addEventListener("submit", (event) => {
  
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Validate input fields
//   const isPhoneValid = validatePhone();
//   const isEmailValid = validateEmail();
//   const isMessageValid = validateMessage();

//   // If any input field is not valid, stop the function
//   if (!isPhoneValid || !isEmailValid || !isMessageValid) {
//     return;
//   }

//   // Change the submit button text to "SENDING..."
//   submitButton.innerHTML = "SENDING...";

//   const formData = new FormData(contactForm);
//   const data = {
//     name: formData.get("name"),
//     phone: formData.get("phone"),
//     email: formData.get("email"),
//     message: formData.get("message"),
//   };

//   emailjs.send("service_5zcmz28", "template_nnyrlnq", data)
//     .then((response) => {
//       console.log("Email sent:", response);
//       // Hide the form and display the "Thank you" message
//       contactForm.style.display = "none";
//       messageSent.style.display = "block";
//     })
//     .catch((error) => {
//       console.error("Error sending email:", error);
//       messageStatus.innerHTML = "Failed to send message.";
//     })
//     .finally(() => {
//       // Reset the submit button text to "SUBMIT"
//       submitButton.innerHTML = "SEND";
//     });
// });

// // Stops browser default form validation.
// contactForm.setAttribute("novalidate", true);
