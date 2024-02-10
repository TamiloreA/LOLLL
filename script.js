/** var pokeball = document.getElementById("pokeball");
var shadow = document.getElementById("pokeShadow");

pokeball.addEventListener("click", function (event) {
    pokeball.className += "animate";
    shadow.className += "shadowAnimate";
}) **/

var pokeBall = document.getElementById("pokeball");

  setTimeout(function() {
  document.getElementById("bubble").className += " bubbleAnimation2";
  
  setTimeout(function() {
    document.getElementById("bubbleArrow").style.opacity = 1;    
  },200)

  
},1000)