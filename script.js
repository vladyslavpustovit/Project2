window.onscroll = function () {
  scrollRotate2();
};

function scrollRotate2() {
  let image = document.getElementById("earth");
  image.style.transform = "rotate(" + window.pageYOffset / 3 + "deg)";
}
