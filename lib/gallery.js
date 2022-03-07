import photoloader from "./photoloader.js"

let gallerie = [];

function load() {
    let donnes = photoloader.loadTricks(1, 50);
    return donnes.then((data) => {
        let photos = data.photos;
        photos.forEach(element => {
           
            let obj = {
                uri: `www/canals5/phox/api/photos/${element.photo.id}`,
                url: `https://webetu.iutnc.univ-lorraine.fr/${element.photo.thumbnail.href}`
            }
            
          
            gallerie.push(obj);
            
        });

        return gallerie;
    })
    
}




export default {
    load,
    gallerie
}