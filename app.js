import glassArt from './data/glassArt.js';
import createGlassArtLi from './products/createGlassArt.js';

const list = document.getElementById('glass');

for (let i = 0; i < glassArt.length; i++) {
    const glassArts = glassArt[i];
    const updateDOM = createGlassArtLi(glassArts);
    list.appendChild(updateDOM);
}
console.log(updateDOM);