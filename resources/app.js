var img = document.getElementById('logo');

let darkMode = function (icon) {
    var element = document.body;
    //changeImage(img);
    if(img.src.match('/resources/dclogo.png')){
      img.src = '/resources/dclogo-dark.png';
    } else {
      img.src = '/resources/dclogo.png';
    }
    element.classList.toggle("dark-mode");
    icon.classList.toggle('fa-sun');
  }

let changeImage = function(img) {
  img.src = '/resources/dclogo-dark.png';
}
//darkMode = (icon) => icon.classList.toggle('fa-sun')
