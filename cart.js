///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(sum, item){
    return sum + item.price; }, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
  }
const cartTotal = 180;
const couponValue = 10;
const tax = 0.06;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
THE OBJECT SHOULD CONTAIN THE PROPERTIES BELOW: 
1) NAME OF THE CUSTOMERS: IT HAS TO BE STRING BECAUSE EVERY CUSTOMER HAS A DIFFERENT NAME, AND IT WILL HELP US IDENTIFY THE ORDER'S OWNERS.
2) PHONE: IT CAN BE STRING AND CAN BE FORMAT AS XXX-XXX-XXXX. WE NEED THEIR PHONE NUMBER TO CONTACT WHEN THE FOOD IS READY FOR PICK UP/DELIVERY.
3) ADDRESS: IT HAS TO BE STRING BECAUSE ADDRESS INCLUDES BOTH NUMBER AND LETTERS. WE NEED ADDRESS FOR DELIVERY ORDERS.
4) EMAIL: IT HAS TO STRING BECAUSE EMAIL ADDRESS CONTAINS BOTH LETTERS AND NUMBERS. WE NEED EMAIL TO SEND ORDER CONFIRMATIONS,AND RECEIPTS IF NEEDED.
5) ORDER DETAILS: IT HAS TO BE STRING BECAUSE ORDER DETAIL WILL HAVE LETTERS. WE NEED ORDER DETAILS TO MAKE SURE WE DO NOT MISSCOMMUNICATE WITH CUSTOMERS.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Tran",
    phone: "123-456-7899",
    address: "987 Bootcamp, USA",
    email: "perficient@company.com",
    order: "Chicken, Rice, Coke"
}
