import gallery from "./gallery.js";


let endroitGallerie = document.getElementById('gallery_container');


function displayGallerie(gallerie) {
    gallerie.forEach(element => {
    
        let div = document.createElement('div');
    div.classList.add('vignette');

    div.innerHTML = `
    <img data-uri="/www/canals5/phox/photos/100"
      src="${element.image}"
`;

});
}