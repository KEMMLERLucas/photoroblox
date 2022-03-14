import gallery from "./gallery.js";
import lightbox from "./lightbox.js";

let endroitGalerie = document.getElementById('gallery_container');


function display_galerie(gallerie) {

    gallerie.forEach(element => {
    
    let div = document.createElement('div');
    div.classList.add('vignette');

    let str = `
    <img data-uri="${element.uri}"
      src="${element.url}">
    `;
    div.innerHTML = str;
    div.addEventListener('click', (e) => {
      lightbox.load(e.target);
    })
    endroitGalerie.appendChild(div);

});
}

export default {
    display_galerie
}