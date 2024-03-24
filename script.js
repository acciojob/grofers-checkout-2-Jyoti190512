//your code here
// Function to calculate total price
function calculateTotal() {
  // Get all elements with data-ns-test="prices"
  let prices = document.querySelectorAll('[data-ns-test="prices"]');
  
  let totalPrice = 0;

  // Loop through each price element and add its value to totalPrice
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent); // Convert string to float
  });

  // Create a new row for total price
  let totalRow = document.createElement('tr');
  let totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2'); // Span across both columns
  totalCell.textContent = 'Total: $' + totalPrice.toFixed(2); // Format to two decimal places
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  totalRow.appendChild(totalCell);

  // Add the total row to the table
  document.getElementById('grocery-table').appendChild(totalRow);
}

// Call the function to calculate and display total price
calculateTotal();


