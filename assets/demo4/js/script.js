var a_link = document.querySelectorAll('.a-link');
var dd_box = document.querySelectorAll('[dd-box_hover]');
// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
// Handle box hover
dd_box.forEach(e => e.addEventListener('mouseenter', handleBoxEnter));
dd_box.forEach(e => e.addEventListener('mouseleave', handleBoxLeave));
window.addEventListener('mousemove', handleMouseMove);
// Move the cursor in dom/window
function handleMouseMove(event) {
  var top = event.pageY - (cursor.clientHeight / 2);
  var left = event.pageX - (cursor.clientWidth / 2);
  cursor.style.top = top + 'px';
  cursor.style.left = left + 'px';
}
// event: mouse enter on link
function handleMouseEnter() {
  cursor.classList.add('scaled');
}
// event: mouse leave on link
function handleMouseLeave() {
  cursor.classList = '';
}

function handleBoxEnter(event) {
  cursor.classList = '';
  var box_side = event.target.getAttribute('dd-box_hover');
  (box_side == 'left' ? cursor.classList.add('hovered', 'left-arrow') : cursor.classList.add('hovered', 'right-arrow'));
}

function handleBoxLeave() {
  cursor.classList = '';
}