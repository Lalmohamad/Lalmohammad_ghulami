function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var jpg = document.getElementById("jpg");
jpg.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    jpg.src = "sun.png";
  }
  else
  {
    jpg.src = "moon.jpg";
  }
}
