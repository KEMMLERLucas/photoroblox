import photoloader from './lib/photoloader.js'
import gallery from './lib/gallery.js'
import gallerie_ui from './lib/gallery_ui.js'




document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
     gallery.load().then(gallerie_ui.display_galerie)
   
    
   
})




document.querySelector('#next').addEventListener('click', (e) => {
  console.log("Page suivante zbi");
  console.log("On vide le dom");
  document.querySelector("#gallery_container").innerHTML = "";
  console.log("On affiche les nouvelles images");

  gallery.next().then(gallerie_ui.display_galerie)


})


document.querySelector('#previous').addEventListener('click', (e) => {
  console.log("Page precedente zbi");
  console.log("On vide le dom");
  document.querySelector("#gallery_container").innerHTML = "";
  console.log("On affiche les nouvelles images");

  gallery.prev().then(gallerie_ui.display_galerie)


})


document.querySelector('#first').addEventListener('click', (e) => {
  console.log("Premiere page");
  console.log("On vide le dom");
  document.querySelector("#gallery_container").innerHTML = "";
  console.log("On affiche les nouvelles images");

  gallery.first().then(gallerie_ui.display_galerie)


})

document.querySelector('#last').addEventListener('click', (e) => {
  console.log("Derniere page");
  console.log("On vide le dom");
  document.querySelector("#gallery_container").innerHTML = "";
  console.log("On affiche les nouvelles images");

  gallery.last().then(gallerie_ui.display_galerie)


})








