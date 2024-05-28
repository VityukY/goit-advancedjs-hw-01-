import "./init"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems as images} from './gallery-items';


const galleryLink = document.querySelector('.gallery');

function galleryItemsCreator () {
   let galleryItem = ''
   for (const {preview, original, description} of images) {
      const item = `
      <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    galleryItem+=item;
   }
   return galleryItem
}
galleryLink.innerHTML = galleryItemsCreator ();


const lightbox = new SimpleLightbox('.gallery a', {
});

