//Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[14]);
// document.all[14].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID//
//console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
//headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = "solid 3px #000";

//GETELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "Yellow";

// //Error Given//
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "Yellow";

// //Error Given//
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR//

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector('#item');

// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "Red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";

// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.color = "coral";

//QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {

//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';

// }

//TRAVERSING THE DOM//
var itemlist = document.querySelector('#items');
//Parent Node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

//Parent Element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

//Child Nodes
//console.log(itemlist.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = "Yellow";

//First Child
//console.log(itemlist.firstChild);

//FirstElementChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent = "Hello 1";

//First Child
//console.log(itemlist.lastChild);

//LastElementChild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = "Hello 4";

//Next sibling
//console.log(itemlist.nextSibling);
//NextElementSibling
//console.log(itemlist.nextElementSibling);

//Previous Sibling
//console.log(itemlist.previousSibling);
//Previous Element Sibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = "green";

//createElement
//console.log('text');

//Create a div
//var newDiv = document.createElement('div');
// add className
//newDiv.className = 'Hello';
// add id
//newDiv.id = 'Hello1';
// add Attr
//newDiv.setAttribute('title', 'Hello Div');
// create text node
//var newDivText = document.createTextNode('Hello World');
// Add text to Div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(container, h1);
//newDiv.style.fontSize = '30px';
//container.insertBefore(newDiv, h1);

//EVENTS//
// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);

// function buttonClick(e) {
// console.log('Button clicked');
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id + '</h3>';

// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');


//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);

    //console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';


    // output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY + '</h3>'

    //document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}


















