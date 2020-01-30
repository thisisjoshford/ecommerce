import glassArt from '../data/glassArt.js';
//import calcLineItem from '../common/calcLineItem.js';
import findByID from '../common/findByID.js';
import renderLineItem from './renderLineItem.js';
import calcOrderTotal from '../common/calcOrderTotal.js';


const tableBody = document.querySelector('tbody');
const placeOrderButton = document.getElementById('buy-button');

const json = localStorage.getItem('glassCart');
let glassCart;
if (json) { glassCart = JSON.parse(json);}
else {glassCart = [];}

for (let i = 0; i < glassCart.length; i++) {
    const lineItem = glassCart[i];
    const glassItem = findByID(lineItem.id, glassArt);
    const tableUpdate = renderLineItem(lineItem, glassItem);  
    tableBody.appendChild(tableUpdate);
}
const grandTotal = calcOrderTotal(glassCart, glassArt);
const grandT = document.getElementById ('total');
grandT.textContent = (grandTotal);

if (glassCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('glassCart');
        alert('Your order has been placed!' + JSON.stringify(glassCart, true, 2));
        window.location = '../';
    });
}