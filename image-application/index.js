const display = document.querySelector(".image-display");
function showImage(src) {
  display.innerHTML = "";
  const selectedImage = document.createElement("img");
  selectedImage.setAttribute("class", "selected-image");
  selectedImage.setAttribute("src", src);
  display.appendChild(selectedImage);
}
