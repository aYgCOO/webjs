let a = [1,2,3,4,5,6,7,8];
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[0]="Andrew");
console.log(a[5]="Danet");
console.log(a[3]=2000);
console.log("This is an Array.");
a.forEach(element => {
     console.log(element+1);
     
     
});

let arr = [46364,873723,78973,738773];
console.log("This is a string....");
console.log(arr.toString());
//Pop and Push is work like a Stack.
//It's add the element to the end.
console.log(arr.pop());
console.log(arr.push("you!"));
console.log(arr);
//Sift and Unsift is work like a Queue.
//It's add the element to the front.
console.log(arr.shift());
console.log(arr.unshift("Fuck"));
console.log(arr);
//Splice(1,2) mean it's delete the elements after 1 index. 
console.log("Return the deleted elements.");
console.log(arr.splice(1,2));
console.log("Final result");
console.log(arr);

