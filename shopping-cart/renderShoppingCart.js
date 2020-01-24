import glassArt from '../data/glassArt.js';
import glassOrder from '../data/cart.js';
//import calcLineItem from '../common/calcLineItem.js';
import findByID from '../common/findByID.js';
import renderLineItem from './renderLineItem.js';
import calcOrderTotal from '../common/calcOrderTotal.js';

const tableBody = document.querySelector('tbody');

for (let i = 0; i < glassOrder.length; i++) {
    const lineItem = glassOrder[i];
    const glassItem = findByID(lineItem.id, glassArt);
    const tableUpdate = renderLineItem(lineItem, glassItem);
    const grandTotal = calcOrderTotal(glassOrder, glassArt);
    console.log(grandTotal);

    tableBody.appendChild(tableUpdate);

}