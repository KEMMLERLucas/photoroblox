import photoloader from "./photoloader.js"
import lightbox_ui from "./lightbox_ui.js";


let nextSibling = "";
let prevSibling = "";
function load(node) {
    console.log(node.getAttribute('data-uri'));
    console.log(node.parentNode.nextSibling.firstElementChild);
    console.log(node.parentNode.previousSibling)
    nextSibling = node.parentNode.nextSibling.firstElementChild;
    prevSibling = node.parentNode.previousSibling.firstElementChild;
    console.log(prevSibling.getAttribute('data-uri'));
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
    load,
    prevSibling,
    nextSibling
}