/*
Asynchronous : "I will finish later!".
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/

// Callbacks
//Functions passed as arguments to other functions to be executed later.

function callBack(message){
     console.log("This is a return message"+ message);
}
setTimeout(() => {
     console.log("First Execution");
     const later = "This will execute later";
     callBack(later);
     console.log("Last Execution");
     
}, 3000);

