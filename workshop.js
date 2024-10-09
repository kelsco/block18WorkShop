// Unit Testing
// Problem #1
// Multiply the two input numbers to return the product 
// Expect multiplication (2,3) to be equal to 6
// Expect product of multiplication to be a number
// Expect error if multiplying not a number

// Problem #2
// Function called concatOdds()
// takes two arrays of integers as argumemnts

// Should return a single array that only contains the odd Numbers
// eg. concatOdds([3,2,1], [9, 1, 1, 1, 4, 15, -1]);
// should result in [-1, 1, 3, 9, 15] now that it removes redundant numbers

/* Think about the assumptions made while writing this code
*** What happens if the user inputs something unexpected? an object? or a number?

expect concatOdds ([3,2,1], [9, 1, 1, 1, 4, 15, -1]); to return an array
expect concatOdds([3,2,1], [9, 1, 1, 1, 4, 15, -1]); to return [-1, 1, 3, 9, 15]
expect concatOdds({[2,4,2,2,8,6,6,2]}); to return an empty array
expect concatOdds([3,2,1], "Hello World"); to return an error
*/

/* Functional tests 

1. When a user is a guest and tries to check out, expect to be prompted to log in or create an account
2. If user selects guest check out continue to check out
2. When user checks out the cart should accpet money and supply goods
3. If cart is empty user should expect an error when trying to check out
4. When user checks out total cost amount should be shown and payment information requested
5. If item is a gift, offer option for gift receipt
6. When a user is a member, display any loyalty rewards before check out, if user has rewards give option to use 
7. When a user has duplicates of an item in cart, allow quantity change
8. When user is checking out give option for pick up or delivery.
*/

