import photoloader from "./photoloader.js"
import lightbox_ui from "./lightbox_ui.js";
import gallery from "./gallery.js";


let nextSibling = "";
let prevSibling = "";
let nodeCourante = {};


function load(node) {
    nodeCourante = node;
    console.log(node.parentNode.previousSibling);
    let res = photoloader.loadRessource(node.getAttribute('data-uri'));
    res.then((data) => {

        lightbox_ui.display_lightbox(data);
        getCateg("https://webetu.iutnc.univ-lorraine.fr" + data.links.categorie.href);
        getCommentaires("https://webetu.iutnc.univ-lorraine.fr" + data.links.comments.href);
    })


    if (node.parentNode.nextSibling != null) {
        nextSibling = node.parentNode.nextSibling.firstChild.nextSibling;

    } else {

        nextSibling = node.parentNode.parentNode.firstElementChild.firstChild.nextSibling;
        console.log(nextSibling);
    }
    if (node.parentNode.previousSibling.firstChild != null) {
        prevSibling = node.parentNode.previousSibling.firstElementChild;
    } else {

        prevSibling = node.parentNode.parentNode.lastElementChild.firstChild.nextSibling;
    }
}

function next() {

    if (nextSibling != "" && nodeCourante != nextSibling) {
        load(nextSibling);
    }
}

function prev() {
    if (prevSibling != "" && nodeCourante != prevSibling) {
        load(prevSibling);
    }
}

const getCateg = function(lien) {
    let categ = photoloader.charge(lien);

    categ.then(lightbox_ui.displayCateg)

}


const getCommentaires = function(lien) {
    let res = photoloader.charge(lien);
    res.then(lightbox_ui.displayCommentaire);
}

export default {
    load,
    prevSibling,
    nextSibling,
    next,
    prev
}