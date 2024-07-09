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
     console.log("First Execution");
},5000)

console.log(" Second Execution");

//Promises

 // Sync execution
const promisesOne = new Promise(function(resolve, reject){
     console.log("Sync,task execute successfully");
     resolve(); 
})
promisesOne.then(
     function(){
          console.log("Sync, task promise consume successfully");
     }
)

 // Async execution
const promisesTask = new Promise(function(resolve, reject){
     setTimeout(function(){
         console.log("Async, task completed successfully");
         resolve(); 
   }, 5000)
  
 })
 promisesTask.then(function(){
     setTimeout(function(){
         console.log("Async, promise consume successfully");
     },2000)
 })


// Data retrieval 
const dataRetrieval = new Promise(function(resolve, reject){
     setTimeout(function(){
          console.log("Data retrieve successfully");
          resolve({
               username: "ayanabha",
               email: "demo3ayanabha@gmail.com",
               MobileNo: 9875682351  
          })
     }, 6000)

 })
 dataRetrieval.then(function(userData){
     console.log("Please wait.......")
     setTimeout(function(){
          console.log("Data fatching..... ");
          setTimeout(function(){
               console.log(userData);
               console.log("Data retrieval promise consume successfully");
               
          }, 2000)
     }, 10000)
    
 })




// setInterval & clearInterval

const ThisInterval = function(str){
     console.log(str, "Current Date: ", Date.now());
}

clearM = setInterval(ThisInterval, 2000, "Hi mf");

clearInterval(clearM);






