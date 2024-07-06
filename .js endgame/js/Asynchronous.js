/*
Asynchronous : "I will finish later!".
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/

// Callbacks
//Functions passed as arguments to other functions to be executed later.

/*2 types of callBack 1) setTimeout, 2) Promises 

1) setTimeout: Call back Api low priority.
2) Promises: Same concept it's also call back Api but high priority. 
*/


//setTimeout

setTimeout(function(){
     console.log("Hi Ayanabha Chatterjee");
},2000)

console.log(" Second");

