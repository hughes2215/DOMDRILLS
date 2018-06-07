
document.addEventListener("DOMcontentLoaded",function(){
let div = document.createElement('header-container');

let text = document.createTextNode('This is an h1');

let h1 = document.createElement('p');

text.style.color = "red";
text.style.textTransform = "uppercase";

h1.appendChild(text);

div.appendChild(h1);

document.body.appendChild(div);

})