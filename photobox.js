import photoloader from './lib/photoloader.js'

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    photoloader.loadRessources();
  })
