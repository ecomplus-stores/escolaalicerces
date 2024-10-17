let mouseDown = false;
let startX, scrollLeft;
const sliders = document.querySelectorAll('.breakline-false');

sliders.forEach(slider => {
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mousemove', move, false);
});

window.addEventListener('mouseup', stopDragging, false);
window.addEventListener('mouseleave', stopDragging, false);

function startDragging(e) {
  mouseDown = true;
  startX = e.pageX - this.offsetLeft;
  scrollLeft = this.scrollLeft;
}

function stopDragging() {
  mouseDown = false;
}

function move(e) {
  if (!mouseDown) return;
  const x = e.pageX - this.offsetLeft;
  const scroll = x - startX;
  this.scrollLeft = scrollLeft - scroll;
}

window.whatsappRedirect = function(type){
  alert(type)
}