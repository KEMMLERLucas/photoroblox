import photoloader from "./photoloader.js"

gallerie = [];

function load() {
    let donnes = photoloader.loadRessources();
    donnes.then(data => {
        gallerie.push(data);
    })

}



export default {
    load,
    gallerie
}