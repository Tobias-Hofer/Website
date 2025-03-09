/* Scroll Effect */
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


/* DROPDOWN */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


/* Left Pictures Slideshow*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
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
}

/* Right Pictures Slideshow */
let slideIndex_two = 1;
showSlides_two(slideIndex_two);

function plusSlides_two(m) {
  showSlides_two(slideIndex_two += m);
}

function currentSlide_two(m) {
  showSlides_two(slideIndex_two = m);
}

function showSlides_two(m) {
  let i_two;
  let slides_two = document.getElementsByClassName("mySlides2");
  let dots_two = document.getElementsByClassName("dot_two");
  if (m > slides_two.length) {slideIndex_two = 1}    
  if (m < 1) {slideIndex_two = slides_two.length}
  for (i_two = 0; i_two < slides_two.length; i_two++) {
    slides_two[i_two].style.display = "none";  
  }
  for (j = 0; j < dots_two.length; j++) {
    dots_two[j].className = dots_two[j].className.replace(" active", "");
  }
  slides_two[slideIndex_two-1].style.display = "block";  
  dots_two[slideIndex_two-1].className += " active";
}

/* Enlarge Pictures */

img = document.querySelectorAll('[id=img]');
let enlarged = 0;

function toggleEnlargeImg() {
     if (enlarged===0){
       img.style.transform = "scale(1.5)";
       img.style.transition =
       "transform 0.25s ease";
       enlarged = 1;
     }
     else{
       img.style.transform = "scale(1)";
       img.style.transition =
       "transform 0.25s ease";
       enlarged = 0;
     }
     return enlarged;
  }