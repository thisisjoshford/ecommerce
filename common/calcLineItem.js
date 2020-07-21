const calcLineItem = (lineItem, quantity) => {
    const lineOrderTotal = lineItem * quantity;
    return lineOrderTotal;
} ;
export default calcLineItem;