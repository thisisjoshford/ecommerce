function createGlassArtLi(glassArt) {
    const glassArtLi = document.createElement('li');
    glassArtLi.classList.add('glassArt');
    glassArtLi.title = glassArt.description;

    const glassArtH3 = document.createElement('h3');
    glassArtH3.textContent = glassArt.name;

    const glassArtImg = document.createElement('img');
    glassArtImg.src = glassArt.image;

    const glassArtP = document.createElement('p');
    glassArtP.classList.add('price');
    glassArtP.textContent = '$' + glassArt.price.toFixed(2);

    const button = document.createElement('button');
    button.value = 'add';

    glassArtLi.appendChild(glassArtH3);
    glassArtLi.appendChild(glassArtImg);
    glassArtLi.appendChild(glassArtP);
    glassArtLi.appendChild(button);

    return glassArtLi;
 
} 

export default createGlassArtLi;

 