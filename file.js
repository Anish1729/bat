var menu = document.getElementById("menu");
var sidenav = document.getElementById("sidenav");

sidenav.style.right = "-250px";
menu.onlick = function(){
  if(sidenav.style.right == "-250px"){
    sidenav.style.right = "0";

  }
  else {
    sidenav.style.right = "-250px";
  }
}
