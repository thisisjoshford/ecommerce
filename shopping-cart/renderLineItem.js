function renderLineItem(lineItem, glassArt) {
    const glassArtTr = document.createElement('tr');
    console.log(lineItem, glassArt);
    
    const productName = document.createElement('td');
    productName.textContent = glassArt.Name;
    glassArtTr.appendChild(productName);
    // console.log(glassOrderTr.Name);

    const productQuantity = document.createElement('td');
    productQuantity.textContent = lineItem.amount;
    glassArtTr.appendChild(productQuantity);
    // console.log(glassOrderTr);
    
    const productPrice = document.createElement('td');
    productPrice.textContent = glassArt.price;

    // console.log(glassOrderTr);

    return glassArtTr;
}
export default renderLineItem;



