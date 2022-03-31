import lightbox from "./lightbox.js";


function display_lightbox(data) {

    let container = document.querySelector("#lightbox_container");
    // console.log(data);
    // console.log("Prochain élément : " + container.parentNode.nextSibling.innerHTML);
    let titre = container.querySelector("#lightbox_title");
    let fermer = container.querySelector("#lightbox_close");
    let img = container.querySelector('#lightbox_full_img');
    let desc = document.querySelector('#description');
    let categorie = container.querySelector('#la_categorie');


    document.querySelector('#caracteristiques').innerHTML = `${data.photo.type}, ${data.photo.width} x ${data.photo.height}`;
    titre.innerHTML = data.photo.titre;
    desc.innerHTML = data.photo.descr;


    fermer.addEventListener('click', (e) => {
        console.log("click zbi");
        hide();
    });

    img.setAttribute('src', `https://webetu.iutnc.univ-lorraine.fr${data.photo.url.href}`);

    show();

    container.querySelector("#prevImgButton").addEventListener('click', lightbox.prev);

    container.querySelector("#nextImgButton").addEventListener('click', lightbox.next);
}

function show() {

    document.querySelector("#lightbox_container").classList.remove("lightbox_container--hidden");
    document.querySelector("#lightbox_container").classList.add("lightbox_container--visible");
}

function hide() {
    //console.log("On fuit les problèmes");

    //console.log(document.querySelector("#lightbox_container").classList);
    document.querySelector("#lightbox_container").classList.remove("lightbox_container--visible");
    document.querySelector("#lightbox_container").classList.add("lightbox_container--hidden");

}


function displayCateg(categ) {
    // console.log("Categorie : " + categ);
    document.querySelector('#la_categorie').innerHTML = `Categorie : ${categ.categorie.nom}`;
}


function displayCommentaire(comm) {
    // console.log(comm);
    document.querySelector('#les_commentaires').innerHTML = "";
    comm.comments.forEach(element => {
        document.querySelector('#les_commentaires').innerHTML += `<li>(${element.pseudo}) : ${element.content}</li>`;

    });
}
export default {
    display_lightbox,
    displayCateg,
    displayCommentaire
}