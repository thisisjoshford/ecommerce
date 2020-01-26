import findByID from '../common/findByID.js';

function createGlassArtLi(glassArt) {
    const glassArtLi = document.createElement('li');
    glassArtLi.classList.add('glassArts');
    glassArtLi.title = glassArt.description;

    const glassArtH3 = document.createElement('h3');
    glassArtH3.textContent = glassArt.name;

    const glassArtImg = document.createElement('img');
    glassArtImg.src = glassArt.image;
    glassArtImg.width = 300;
    glassArtImg.height = 406;
   
    const glassArtP = document.createElement('p');
    glassArtP.classList.add('price');
    glassArtP.textContent = '$' + glassArt.price.toFixed(2);
    //console.log(glassArtP);

    const glassArtDescription = document.createElement('p');
    glassArtDescription.textContent = glassArt.description;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = glassArt.id;
    button.addEventListener('click', () => {

        let json = localStorage.getItem('glassCart');

        let glassCart;
        if (json) { glassCart = JSON.parse(json);}
        else { glassCart = [];}

        let lineItem = findByID(glassArt.id, glassCart);
        if (!lineItem) {
            lineItem = {
                id: glassArt.id,
                quantity: 1
            };
            glassCart.push(lineItem);}
        else { lineItem.quantity++;}

        json = JSON.stringify(glassCart);
        localStorage.setItem('glassCart', json);

        alert('1 ' + glassArt.name + ' was added to your Shopping Cart!');

    });

    //glassArtP.appendChild(button);
    glassArtLi.appendChild(glassArtH3);
    glassArtLi.appendChild(glassArtImg);
    glassArtLi.appendChild(glassArtP);
    glassArtLi.appendChild(glassArtDescription);
    glassArtLi.appendChild(button);

    return glassArtLi;
} 

export default createGlassArtLi;

 