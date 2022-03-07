import gallery from "./gallery.js";


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
    
    endroitGalerie.appendChild(div);

});
}

export default {
    display_galerie
}