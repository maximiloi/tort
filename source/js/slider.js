"use strict";

var controls = document.querySelectorAll(".slider__control");
for (var i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

var slides = document.querySelectorAll(".slider");
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slider-fade slider__filling slider";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slider-fade slider__filling slider show";
}

var next = document.querySelectorAll(".next");
var previous = document.querySelectorAll(".prev");

next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};
