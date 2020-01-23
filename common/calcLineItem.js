const calcLineItem = (lineItem) => {
    const lineItemPrice = lineItem.price;
    const lineItemAmt = lineItem.amount;
    const lineOrderTotal = (lineItemPrice * lineItemAmt);
    return lineOrderTotal;
} ;
export default calcLineItem;