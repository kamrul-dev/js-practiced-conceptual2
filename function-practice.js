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


// function pizzaPanda(foodName, quantity){
//     if(foodName.toLowerCase() != 'pizza'){
//         return "Sorry , We sell Pizza only";
//     }
//     var price = 10 * quantity;
//     var message = "Order successfull, order info : " + foodName + ", Price :" + price +  "$";
//     return message;
    
// }
// console.log(pizzaPanda('Pizza', 3));

//=======================================================================

// var person = {
//     name: "Kamrul",
//     age: 25,
//     height: "5 feet 5 inches",
//     hariColor: 'Black',
//     male: true,
//     cardNumber: [213234, 324324, 324324]
// }

// console.log(person.cardNumber[2]);

//==============================================================

// var person1 = 'Kamrul'
// var hisAge = 22;

// var hisDetailes = `His name is ${person1}. He is ${hisAge} years old.`;
// console.log(hisDetailes);

//==================================================================


// switch case

var age = 18;

switch(age){
    case 40: 
        console.log('getting old person');
    break;
    case 18:
        console.log('young');
    break;
    case 10:
        console.log('child');
    break;
    default:
        console.log('I do not know');
}

console.log('I am out of switch');

