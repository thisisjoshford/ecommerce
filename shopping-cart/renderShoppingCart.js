import glassArt from '../data/glassArt.js';
import glassOrder from '../data/cart.js';
import calcLineItem from '../common/calcLineItem.js';
import findByID from '../common/findByID.js';
import renderLineItem from './renderLineItem.js';


for (let i = 0; i < glassOrder.length; i++) {
    const lineItem = glassOrder[i];
    const glassItem = findByID(lineItem.id, glassArt);
    const total = calcLineItem(lineItem.quantity, glassItem.price);
    console.log(total);
    //console.log;
   // const glassAmount = glassOrderInsert.amount;
    //const glassPrice = glassOrderInsert.price;
    // console.log(glassName);
    // console.log(glassAmount);
    // console.log(glassPrice);
    //const productInfo = findByID (glassOrderInsert, glassArt);
    //const updateDOM = renderLineItem(, glassOrderInsert);
    // console.log(updateDOM);
    //orderList.appendChild(updateDOM);
}
