var image = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var galleryImg = document.querySelector(".gallery__inner img");
var gallery = document.querySelector(".gallery1");

var currentIndex = 0;

image.forEach((item, index) => {
    if (item) {
    item.addEventListener("click", function () {
    currentIndex = index;
    galleryImg.src = item.src; // Sửa thành item.src thay vì image[curentIndex].src
    gallery.classList.add("show");
    });
}
});

if (prev) {
prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = image.length - 1;
  }
  galleryImg.src = image[currentIndex].src;
});
}

if (next) {
next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= image.length) {
    currentIndex = 0;
  }
  galleryImg.src = image[currentIndex].src;
});
}

if (close) {
close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
}