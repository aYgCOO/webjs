console.log("This is a classical loop for arrays");
let a = ["Agnik", "Shivam", "Vivek", "Swrup"];
for (let i=0; i<a.length; i++){
     console.log(a[i]);
}

a.forEach((elements, index, array) =>{
     console.log(elements,index,array);

})

let object={
     "Agnik":21,
     "Shivam":20,
     "Vivek":21,
     "Swrup":22
}
for (const key in object) {
          const element = object;
          const element_and_key = object[key];
          console.log(element);
          console.log("age:"+element_and_key);
          
    
}

let emp={
     "Rahul":15000,
     "Shivam":10000,
     "Sanjana":15000,
     "Thapa":20000
}
for(const keyy in emp){
     if(Object.hasOwnProperty.call(emp, keyy)){
          let element = emp;
          const element_and_key = emp[keyy];
          console.log(element);
          console.log("Salary:"+element_and_key+"Rs");

     }else{
          var error=false;
          console.log(error);
     }
}

// let arr = {
//      "a":10000,
//      "b":20000,
//      "c":30000,
//      "d":40000
// }
let arr = ["a","b","c","d"];

for (const value of arr) {
     console.log(value);
}
let arr2 = [1000,20000,3000000,40000000,500000000];
let new_arr = [];
for(let index=0; index<arr2.length; index++){
     const elements = arr2[index];
     const total_value = ((elements)**2);
     console.log(new_arr.push(total_value));
}
console.log(new_arr);

//Map 
//It's autometically initialized the total array in a arry define variable
let myArray = [10000,20000,30000,40000,50000] ;
const bigArray=myArray.map((e)=>{
     return e**3;

})
console.log(bigArray);

//Filter
let myfriendsAgg = [21,22,20,19];
const thisisAnArray = (e) =>{
     if(e >=20){
          return true;

     }
     return false;

}
let allowed = myfriendsAgg.filter(thisisAnArray);
console.log(allowed);





