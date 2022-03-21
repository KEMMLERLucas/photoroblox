import lightbox from "./lightbox.js";


function display_lightbox(data) {
    
    let container = document.querySelector("#lightbox_container");
    console.log(data);
    let titre = container.querySelector("#lightbox_title");
    let fermer = container.querySelector("#lightbox_close");
    let img = container.querySelector('#lightbox_full_img');
    titre.innerHTML = data.photo.titre;
    fermer.addEventListener('click', (e) => {
        console.log("click zbi");
        hide();
    });

    img.setAttribute('src', `https://webetu.iutnc.univ-lorraine.fr${data.photo.url.href}`);

    show();


}

function show() {
    
    document.querySelector("#lightbox_container").classList.remove("lightbox_container--hidden");
    document.querySelector("#lightbox_container").classList.add("lightbox_container--visible");
}

function hide() {
    console.log("On fuit les problèmes");
    
    console.log(document.querySelector("#lightbox_container").classList);
    document.querySelector("#lightbox_container").classList.remove("lightbox_container--visible");
    document.querySelector("#lightbox_container").classList.add("lightbox_container--hidden");
    
}

export default {
    display_lightbox
}