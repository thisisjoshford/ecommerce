import calcLineItem from '../common/calcLineItem.js';

function renderLineItem(lineItem, glassArt) {
    const glassArtTr = document.createElement('tr');
    
    const productQuantity = document.createElement('td');
    productQuantity.textContent = lineItem.quantity;
    glassArtTr.appendChild(productQuantity);
    // console.log(glassOrderTr);
    
    const productName = document.createElement('td');
    productName.textContent = glassArt.name;
    glassArtTr.appendChild(productName);
    // console.log(glassOrderTr.Name);

    const productPrice = document.createElement('td');
    productPrice.textContent = glassArt.price;
    glassArtTr.appendChild(productPrice);

    const totalOrder = document.createElement('td');
    const total = calcLineItem(lineItem.quantity, glassArt.price);
    totalOrder.textContent = total;
    glassArtTr.appendChild(totalOrder);

    // console.log(glassOrderTr);

    return glassArtTr;
}
export default renderLineItem;



