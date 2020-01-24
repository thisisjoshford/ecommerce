import glassArt from '../data/glassArt.js';
import glassOrder from '../data/cart.js';
//import calcLineItem from '../common/calcLineItem.js';
import findByID from '../common/findByID.js';
import renderLineItem from './renderLineItem.js';

const tableBody = document.querySelector('tbody');

for (let i = 0; i < glassOrder.length; i++) {
    const lineItem = glassOrder[i];
    const glassItem = findByID(lineItem.id, glassArt);
    //const total = calcLineItem(lineItem.quantity, glassItem.price);
    const tableUpdate = renderLineItem(lineItem, glassItem);
    tableBody.appendChild(tableUpdate);

}