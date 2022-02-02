const myList = document.getElementById('myList');
//console.log (myList);

const newDonut= document.createElement('li');
const newName = document.createTextNode('Old Fashion');
console.log (newDonut);

newDonut.appendChild (newName);
myList.appendChild(newDonut);

const donuts = documents.getElementByTagName('ul');
//console.log (donuts)