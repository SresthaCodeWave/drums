//document.querySelector("button").addEventListener("click",handClick);
function playMusic(word)
{
  switch (word) {
    case "w":
      var audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      break;
    default:
    var audio3 = new Audio('sounds/snare.mp3');
    audio3.play();
      break;
    }
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
        //alert("I am Clicked!");
        var buttonInnerHtml = this.innerHTML;
        playMusic(buttonInnerHtml);
  });

}
document.addEventListener("keydown",function(event){
  playMusic(event.key);
  buttonAnimation(event.key);
});

// var audio1=new Audio('sounds/kick-bass.mp3');
// audio1.play();
function buttonAnimation(buttonPressed){
  var activeKey=document.querySelector("."+buttonPressed);
  activeKey.classList.toggle("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },200);

}
