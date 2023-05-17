// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// slider main page
let currentIndex = 0;
const prevButton = document.getElementById("arrow-back");
const nextButton = document.getElementById("arrow-next");
const images = document.querySelectorAll("#slider img");

images[currentIndex].classList.add("active");



prevButton.addEventListener("click", () => {
  changeSlide(-1)
});
nextButton.addEventListener("click", () => {
  changeSlide(1)
});




function changeSlide(indexModifier) {
  let newIndex = currentIndex + indexModifier;
  
  if(newIndex >= images.length) {
    newIndex = 0;
  } else if(newIndex < 0) {
    newIndex = images.length - 1;
  }
    
  images[currentIndex].classList.remove("active");
  
   images[newIndex].classList.add("active");

  
  currentIndex = newIndex;

 
 
}

