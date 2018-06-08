
document.addEventListener("DOMContentLoaded",function(){
let div = document.createElement('div');

let text = document.createTextNode('This is an h1');

let h2text = document.createTextNode('This is an h2');
let h3text = document.createTextNode('This is an h3');
let h4text = document.createTextNode('This is an h4');
let h5text = document.createTextNode('This is an h5');
let h6text = document.createTextNode('This is an h6');

let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let h5 = document.createElement('h5');
let h6 = document.createElement('h6');

h1.appendChild(text);
h2.appendChild(h2text);
h3.appendChild(h3text);
h4.appendChild(h4text);
h5.appendChild(h5text);
h6.appendChild(h6text);

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.appendChild(h4);
div.appendChild(h5);
div.appendChild(h6);

h1.className = 'h1';
h2.className = 'h2';
h3.className = 'h3';
h4.className = 'h4';
h5.className = 'h5';
h6.className = 'h6';


document.body.appendChild(div);

//button says color change
let colorbutton = document.createElement('button');
let buttoncolor = document.createTextNode('Color Change');
colorbutton.appendChild(buttoncolor);
document.body.appendChild(colorbutton);


let colortext = document.createTextNode('colorcolor');

//makes color change




colorbutton.addEventListener("dblclick", function(){
 
    let colorforh1 = ["purple","yellow","brown","green","tan","black","red","orange"]; 
    let colorselector = colorforh1[Math.floor(colorforh1.length * Math.random())];
   h1.style.color = colorselector;  
   
})


})



