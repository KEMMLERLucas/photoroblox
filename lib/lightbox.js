import photoloader from "./photoloader.js"


function load(node) {
    photoloader.loadRessources(node.getAttribute('data-uri'));
}



export default {
    load
}