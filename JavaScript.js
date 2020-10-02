 
 window.onscroll = function() {
   scrollFunction();
};
      
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.padding = "4px 2px";
   } else {
     document.getElementById("navbar").style.padding = "10px 8px";
   }
 }
 function customLightBox() {
  const img = document.querySelectorAll('.imgs img');
  const opacity = 0.6;
  img[0].style.opacity = opacity;
  img.forEach(
    function(item) {
      item.addEventListener('click', imgClick);
    }
  );
 }

function imgClick(e) {
  const img = document.querySelectorAll('.imgs img');
  img.forEach(img => (img.style.opacity = 1));
  current = document.querySelector('#current');
  current.src = e.target.src;
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
  const opacity = 0.6;
  e.target.style.opacity = opacity;
}

var slideIndex = 1; 
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlidesNext();

function showSlidesNext() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesNext, 3000); 
}

