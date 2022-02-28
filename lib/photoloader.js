import conf from "./conf.js"



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
    charge
}