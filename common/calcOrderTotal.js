import calcLineItem from './calcLineItem.js';
import findById from './findByID.js';

export default function calcOrderTotal(glassOrder, glassArt) {
    let total = 0;
    console.log(glassOrder);
    for (let i = 0; i < glassOrder.length; i++) {
        const lineItem = glassOrder[i];
        const glassArts = findById(glassOrder[i].id, glassArt);
        const lineTotal = calcLineItem(lineItem.quantity, glassArts.price);
        total += lineTotal;
        console.log(total);
    }
    return total;
    
}