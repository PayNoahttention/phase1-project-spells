// TODO Move scale from css to onhover in js

// setting up variables of house images
const houseGryffindor = document.getElementById('gryffindor');
const houseHufflepuff = document.getElementById('hufflepuff');
const houseRavenclaw = document.getElementById('ravenclaw');
const houseSlytherin = document.getElementById('slytherin');


// changing background color and font color to house colors on click 

// Gryffindor
houseGryffindor.addEventListener('click', (e) => document.body.style.backgroundColor = "#740001");
houseGryffindor.addEventListener('click', (e) => document.body.style.color = "#D3A625");

// Hufflepuff
houseHufflepuff.addEventListener('click', (e) => document.body.style.backgroundColor = "#FFD800");
houseHufflepuff.addEventListener('click', (e) => document.body.style.color = "#000000");
houseHufflepuff.addEventListener('click', (e) => document.body.style.removeProperty = "text-shadow"); // to stop text from chonky look

// Ravenclaw
houseRavenclaw.addEventListener('click', (e) => document.body.style.backgroundColor = "#0E1A40");
houseRavenclaw.addEventListener('click', (e) => document.body.style.color = "#946B2D");

// Slytherin
houseSlytherin.addEventListener('click', (e) => document.body.style.backgroundColor = "#1A472A");
houseSlytherin.addEventListener('click', (e) => document.body.style.color = "#5D5D5D");

