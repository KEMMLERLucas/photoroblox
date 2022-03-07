async function loadRessources() {
    let res = await fetch("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/", {credentials: "include"});
    if (res.ok){
        let photos = await res.json();
        return photos;
    }

    
}

async function loadTricks(nbPage, taille) {
    let res = await fetch(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/?page=${nbPage}&size=${taille}`, {credentials: "include"});
    if (res.ok){
        let photos = await res.json();
        console.log(photos);
        return photos;
    }
}


async function loadRessource(id) {
    let res = await fetch("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/${id}", {credentials: "include"});
    if (res.ok){
        let photos = await res.json();
        return photos;
    }

    
}



function loadPicture(idPicture) {
   return fetch(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/${idPicture}`, {
        credentials: "include"})
        .then(function (e) {
            return e.json()
        })
        .then(data => {
            return data;
        })
        .catch((err) => {
            alert("Erreur, " + err);
        })
}

function charge(uri) {
    return fetch(uri, {credentials: "include"})
        .then(function (e) {
            if (e.ok){
                return e.json();
            }
        })
}


export default {
    loadPicture,
    charge,
    loadRessources,
    loadTricks
}