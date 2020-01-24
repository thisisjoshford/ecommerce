const findByID = (glassID, glassArray) => {
    for (let i = 0 ; i < glassArray.length; i++) {
        const glassProduct = glassArray[i];
        if (glassProduct.id === glassID){
            return glassProduct;
            
        }
    } };
export default findByID;