import photoloader from "./photoloader.js"
import lightbox_ui from "./lightbox_ui.js";

function load(node) {
    console.log(node.getAttribute('data-uri'));
    let res = photoloader.loadRessource(node.getAttribute('data-uri'));
    res.then((data) => {
        console.log(data);
        lightbox_ui.display_lightbox(data);
        getCateg("https://webetu.iutnc.univ-lorraine.fr" + data.links.categorie.href);
        getCommentaires("https://webetu.iutnc.univ-lorraine.fr" + data.links.comments.href);
    })
    }

    

const getCateg = function(lien) {
    let categ = photoloader.charge(lien);
    categ.then(resp => console.log(resp))
    categ.then(lightbox_ui.displayCateg)
      
}
     
     
const getCommentaires = function(lien) {
    let res = photoloader.charge(lien);
    res.then(lightbox_ui.displayCommentaire);
}

export default {
    load
}