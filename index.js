document.addEventListener("scroll", function(event) {
  var startPosition = 752;
  var newPosition = window.scrollY - startPosition + 1000;
  console.log("el avion: " + newPosition);
  console.log("la posicion del scroll: " + window.scrollY);
  if (window.scrollY > 752) {
    $("#airplane").css("top", newPosition + "px");
  }
  if (window.scrollY <= 752) {
    $("#airplane").css("top", "1000px");
  }
  if (window.scrollY > 1433) {
    $("#airplane").css("top", "1683px");
  }
});
