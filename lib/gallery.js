import photoloader from "./photoloader.js"


let gallerie = [];
let nextPageUrl = "";
let prevPageUrl = "";
function load() {
    let donnes = photoloader.loadTricks(1, 50);
    return donnes.then((data) => {
        let photos = data.photos;
        nextPageUrl = data.links.next.href;
        console.log("Next page url : " + nextPageUrl);
        prevPageUrl = data.links.prev.href;
        console.log("Prev page url : " + prevPageUrl);
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


function next(){
    gallerie = [];
    let donnes = photoloader.loadPageWithUrl(nextPageUrl);
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


function prev(){
    gallerie = [];
    let donnes = photoloader.loadPageWithUrl(prevPageUrl);
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
    gallerie,
    next,
    prev,
    nextPageUrl,
    prevPageUrl
}