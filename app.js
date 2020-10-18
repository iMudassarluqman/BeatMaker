// selecting all buttons
let buttons =document.querySelectorAll(".key");

window.addEventListener("keydown",(e)=>{
    let beat=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!beat) return;
  
  beat.currentTime=0;
  key.classList.add("playing");
  beat.play();
});

function transitionEnd(){
    this.classList.remove("playing");
}

buttons.forEach((button)=>{
    button.addEventListener("transitionend",transitionEnd);
    
})


