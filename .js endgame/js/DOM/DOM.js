/*
DOM =  Document object model 
      'object{}' that represent the page you see in your browser and provide you with API to interact with it.
       web browser constructs the DOM when it loads an html document, and structure all the elements in a tree 
       like representation, javascript can access the DOM to dynamically change the content, structure, and 
       style of a web page.

Nodes and Elements: The DOM tree consists of different types of nodes:
       Element Nodes: Represent HTML tags (e.g., <div>, <p>, <a>).
       Attribute Nodes: Represent attributes of HTML tags (e.g., class, id).
       Text Nodes: Represent the text inside HTML elements.

Hierarchy: The DOM tree has a hierarchical structure where nodes have parent-child relationships.

Accessing DOM Elements: You can access DOM elements using various methods:
       document.getElementById('id'): Selects an element by its ID.
       document.getElementsByClassName('class'): Selects elements by their class name.
       document.getElementsByTagName('tag'): Selects elements by their tag name.
       document.querySelector('selector'): Selects the first element that matches a CSS selector.
       document.querySelectorAll('selector'): Selects all elements that match a CSS selector.

Manipulating DOM Elements: You can modify DOM elements using JavaScript:

       Creating Elements: document.createElement('tag')
       Appending Elements: parent.appendChild(child) 
       Removing Elements: parent.removeChild(child)
       Setting Attributes: element.setAttribute('attribute', 'value')
       Modifying Inner HTML: element.innerHTML = 'new content'
       Modifying Text Content: element.textContent = 'new text'


*/

//What document?
console.log(document);
console.dir(document);
var changeDocTitle = document.title="Js Endgame";
console.log(changeDocTitle);
//Change the text using innerHTML 
let changeTxt = document.getElementById("test-text");
changeTxt.innerHTML = "Boom";

//Change the text using button
function clickBtn() {
       var accessTxt = document.getElementById("change-text");
       accessTxt.innerHTML = "Ohh! the text is change.";
}

//Change css properties using button
function dbClick(){
       var visibleLink = document.getElementById("display-link");
       visibleLink.style.visibility="visible";

}

//Change element by using query selector

// In this case 'querySelector' choose the first element of the Dom tree.
let aList = document.querySelector(".list");
console.log(aList); 

// In this case 'querySelectorAll' choose the all element of the Dom tree.
let AllList = document.querySelectorAll(".list");
console.log(AllList); // it's give an array with index

// Let's access an element with the array index.

var OneArr = AllList[2].innerHTML;
console.log(OneArr);

var changeThe5index = AllList[4].innerHTML="Customer Support";
console.log(AllList[4], "Change to", changeThe5index);


//Use EventListener
let accessTheImage = document.getElementById("TheImage");
let imageCaption = document.getElementById("caption");

let check = 0;
accessTheImage.addEventListener('mouseover', function(){
       
       if(check == 0){
              accessTheImage.src="image/fuckyou.jpg";
              imageCaption.innerHTML="Go fuck your self mf! Focus!!";
              imageCaption.style.color="red";
              check = 1;
              
       }else{
              accessTheImage.src="image/xeimage.jpg"
              imageCaption.innerHTML="Baby, hover the mouse in my boobies";
              imageCaption.style.color="black";
              check = 0;

       }

})









