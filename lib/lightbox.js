import photoloader from "./photoloader.js"
import lightbox_ui from "./lightbox_ui.js";

function load(node) {
    console.log(node.getAttribute('data-uri'));
    let res = photoloader.loadRessource(node.getAttribute('data-uri'));
    res.then((data) => {
        console.log(data);
        lightbox_ui.display_lightbox(data);
    })
    }

    



export default {
    load
}