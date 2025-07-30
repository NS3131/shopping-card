// // Get total price display
// // var totalDisplay = document.querySelector(".total");

// // Get all buttons and elements
// // var plusButtons = document.querySelectorAll(".fa-plus-circle");


// // // Get the element where total price will be shown
// // var totalDisplay = document.querySelector(".total");

// // // Get all the plus, minus, delete, and heart icons on the page
// // var plusButtons = document.querySelectorAll(".fa-plus-circle");
// // var minusButtons = document.querySelectorAll(".fa-minus-circle");
// // var deleteButtons = document.querySelectorAll(".fa-trash-alt");
// // var heartButtons = document.querySelectorAll(".fa-heart");


// // 🧮 Function to calculate and update the total price
// function updateTotal() {
//   var total = 0; // start with total = 0

//   // Get all the product cards on the page
//   var allCards = document.querySelectorAll(".card-body");

//   // Loop through each product card
//   allCards.forEach(function(card) {
//     // Get the unit price text (like "100 $") and turn it into a number
//     var price = parseFloat(card.querySelector(".unit-price").textContent);

//     // Get the quantity text (like "2") and turn it into a number
//     var quantity = parseInt(card.querySelector(".quantity").textContent);

//     // Multiply price × quantity and add to the total
//     total += price * quantity;
//   });

//   // Show the updated total in the page
//   totalDisplay.textContent = total + " $";
// }


// // ➕ When plus button is clicked
// plusButtons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     // Find the quantity span near the plus button
//     var quantity = btn.parentElement.querySelector(".quantity");

//     // Increase the number by 1
//     quantity.textContent = parseInt(quantity.textContent) + 1;

//     // Update the total price
//     updateTotal();
//   });
// });


// // ➖ When minus button is clicked
// minusButtons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     // Find the quantity span near the minus button
//     var quantity = btn.parentElement.querySelector(".quantity");

//     // Get the current quantity value
//     var current = parseInt(quantity.textContent);

//     // Only subtract if quantity is more than 0
//     if (current > 0) {
//       quantity.textContent = current - 1;
//       updateTotal(); // Update the total after subtracting
//     }
//   });
// });


// // 🗑️ When delete button is clicked
// deleteButtons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     // Find the entire card that contains this button
//     var card = btn.closest(".card-body");

//     // Remove the product card from the page
//     card.remove();

//     // Update the total price after deleting
//     updateTotal();
//   });
// });


// // ❤️ When heart icon is clicked (like/unlike)
// heartButtons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     // If heart is red, change it to black
//     // If it's black, change it to red
//     if (btn.style.color === "red") {
//       btn.style.color = "black";
//     } else {
//       btn.style.color = "red";
//     }
//   });
// 
const deleteButtons = document.querySelectorAll (".fa-trash-alt");
const quantity = document.querySelectorAll(".quantity");
const total = document.querySelector(".total");
const price = document.querySelectorAll (".unit-price");
const productCards = document.querySelectorAll(".product-card");
const heart = document.querySelectorAll(".fa-heart");



plusButtons[0].addEventListener ("click", function () {
    let indPrice = parseInt(price[0].innerHTML.replace("$",""));
    quantity[0].innerHTML ++;
    total.innerHTML = '${quantity[0].innerHTML.replace * indPrice} $';

});
