// addition of two nubmers
// function sumOfNumbers(num1, num2){
//     var result = num1 + num2;
//     return result;
// }

// console.log (sumOfNumbers(65, 4));


//=======================================

// Write a simple function that takes name as a parameter and then return a custom message.

// function welcomMessage(name){
//     var message = "Hello! " + name + ", Welcome to Programming Hero"; 
//     return message;
// }
// console.log(welcomMessage("Kamrul"));

//======================================================================

// Write a function for a food delivery service that sells 'pizza' only. Easch pizza cost 10$. This funciton takes the food name & and quantity as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.


function pizzaPanda(foodName, quantity){
    if(foodName.toLowerCase() != 'pizza'){
        return "Sorry , We sell Pizza only";
    }
    var price = 10 * quantity;
    var message = "Order successfull, order info : " + foodName + ", Price :" + price +  "$";
    return message;
    
}
console.log(pizzaPanda('Pizza', 3));
