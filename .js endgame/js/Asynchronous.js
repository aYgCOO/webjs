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


/* setTimeout */

setTimeout(function () {
     console.log("First Execution");
}, 5000)

console.log(" Second Execution");

/* Promises */

// Promise resolve
// Sync execution 
const promisesOne = new Promise(function (resolve, reject) {
     console.log("Sync,task execute successfully");
     resolve();
})
promisesOne.then(
     function () {
          console.log("Sync, task promise consume successfully");
     }
)

// Async execution
const promisesTask = new Promise(function (resolve, reject) {
     setTimeout(function () {
          console.log("Async, task completed successfully");
          resolve();
     }, 5000)

})
promisesTask.then(function () {
     setTimeout(function () {
          console.log("Async, promise consume successfully");
     }, 2000)
})


// Data retrieval 
const dataRetrieval = new Promise(function (resolve, reject) {
     setTimeout(function () {
          console.log("Data retrieve successfully");
          resolve({
               username: "ayanabha",
               email: "demo3ayanabha@gmail.com",
               MobileNo: 9875682351
          })
     }, 6000)

})
dataRetrieval.then(function (userData) {
     console.log("Please wait.......")
     setTimeout(function () {
          console.log("Data fetching..... ");
          setTimeout(function () {
               console.log(userData);
               console.log("Data retrieval promise consume successfully");

          }, 2000)
     }, 10000)

})

//Promise rejects
//Async execution 
const FileAccess = new Promise(function (resolve, reject) {
     setTimeout(function () {
          var error = false;
          if (!error) {
               console.log("Execution Successful ✅");
               resolve({
                    FileName: "abcd.exe",
                    FilePath: "C:\\User\\System32\\nosexos\\abcd.exe",
                    FileExtension: ".exe",

               });
          } else {
               console.log("Execution Reject ❌");
               reject({ ERROR: "Oops! Something went wrong : (" });
          }
     }, 3000)
});

FileAccess.then(function (fileDetails) {
     setTimeout(function () {
          console.log("Procession.....");
          setTimeout(function () {
               console.log("File Details:");
               console.log(fileDetails);

          }, 1000)
     }, 5000)
     return fileDetails;
}).then(function (fileDetails) {
     console.log(" {abcd.exe}:" + fileDetails.FileName);
     console.log("Access Grant ✅");       /*In JavaScript, promises allow chaining of then methods, which helps to handle asynchronous operations sequentially.                            
                                             Each then method returns a new promise, and the value returned from the callback function within a then method is                       
                                             passed to the next then method in the chain.  */
}).catch(function (fileAccessDenied) {
     setTimeout(function () {
          console.log("{ERROR}:" + fileAccessDenied.ERROR);
          console.log("Access Denied ❌")

     }, 0)
}).finally(function () {
     setTimeout(function () {
          console.log("Session End");
     }, 8000)
})


// Promises using Async & Await 

const finalPromise = new Promise(function (resolve, reject) {
     setTimeout(() => {
          let er = true;
          if (!er) {
               console.log("SUCCESS");
               resolve({ Username: "Sristi Sarker", Gender: "Female" });

          } else {
               console.log("ERROR");
               reject("Unknown");
          }

     }, 2000);
})

async function AsyncPromiseConsumer() {
     try {
          let response = await finalPromise;
          console.log(response);
     } catch (err) {
          console.log("Execution Reject");
          console.log(err);
     }
}

AsyncPromiseConsumer();


// setInterval & clearInterval

const ThisInterval = function (str) {
     console.log(str, "Current Date: ", Date.now());
}

clearM = setInterval(ThisInterval, 2000, "Hi mf");

clearInterval(clearM);



/* Fetch */
/* New updated fetch() global function
The global fetch() method starts the process of fetching a resource from the network, 
 returning a promise that is fulfilled once the response is available. */

let resource = {
     Username: "Shivam",
     Gender: "Unknown",
     Type: "Cringe"
}
fetch(resource)
fetch(resource, options);


const myImage = document.querySelector("img-example");

const myRequest = new Request("example-flowers.jpg");

fetch(myRequest)
     .then((response) => {
          if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.blob();
     })
     .then((response) => {
          myImage.src = URL.createObjectURL(response);
     });








