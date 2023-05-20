import { Carousel } from "bootstrap";

let amountOfImages = media.length;
let currentIndex = 0;

const slide = document.getElementById("carusel-image");
const btnLeft = document.getElementById("carousel-control-prev");
const btnRight = document.getElementById("carousel-control-nextt");

function prevImage() {
  if (currentIndex > 0) {
    // Can't go lower than 0.
    currentIndex--;
    updateImage();
  }
}

function nextImage() {
  if (currentIndex < amountOfImages - 1) {
    // Can't go higher than the amount of images present.
    currentIndex++;
    updateImage();
  }
}
let mediaURL = media[currentIndex];
function updateImage() {
  slide.style.backgroundImage = `"url('${mediaURL}')"`;
}

btnLeft.addEventListener("click", prevImage);
btnRight.addEventListener("click", nextImage);

// leave for later Carousel
