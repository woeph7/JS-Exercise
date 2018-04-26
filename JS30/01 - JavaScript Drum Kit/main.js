window.addEventListener('keydown', function(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio)ruturn; //stop running the  function
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');
});

function removeTransition(event){
  if(event.propertyName !== 'transform') return; //remove irrelevent informations
  console.log(event.propertyName);
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
