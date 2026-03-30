How did you dynamically create and append new elements to the DOM?
I used JavaScript DOM methods like document.createElement() to create new elements and appendChild() (or similar methods) to add them to the existing DOM structure dynamically.

What steps did you take to ensure accurate updates to the total price?
I followed the logic provided in the pre-code to calculate the total price. Each time a product was added or removed, I recalculated the total by iterating through the list and updating the displayed value accordingly.

How did you handle invalid input for product name or price?
I implemented validation checks to ensure that both the product name and price are provided. If either field is empty or invalid, an error message is displayed to inform the user that the input is missing or incorrect.

What challenges did you face when implementing the remove functionality?
The main challenge was understanding how to correctly remove specific items from the list. I learned that by using unique identifiers (IDs), I could target and remove the correct element from the DOM efficiently.