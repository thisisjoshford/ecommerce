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

    const glassArtDescription = document.createElement('p');
    glassArtP.textContent = glassArt.description;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';

    glassArtLi.appendChild(glassArtH3);
    glassArtLi.appendChild(glassArtImg);
    glassArtLi.appendChild(glassArtP);
    glassArtLi.appendChild(glassArtDescription);
    glassArtLi.appendChild(button);

    return glassArtLi;
 
} 

export default createGlassArtLi;

 