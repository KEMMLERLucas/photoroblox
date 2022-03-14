import photoloader from './lib/photoloader.js'
import gallery from './lib/gallery.js'
import gallerie_ui from './lib/gallery_ui.js'




document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    gallery.load().then((data) => {
      gallerie_ui.display_galerie(data);
    })
    
    gallerie_ui.display_galerie(gallery.gallerie);
    
   
})




document.querySelector('#next').addEventListener('click', (e) => {
  console.log("Page suivante zbi");
  console.log("On vide le dom");
  document.querySelector("#gallery_container").innerHTML = "";
  console.log("On affiche les nouvelles images");

  gallery.next().then((data) => {
    gallerie_ui.display_galerie(data);
  })

  gallerie_ui.display_galerie(gallery.gallerie);

})








