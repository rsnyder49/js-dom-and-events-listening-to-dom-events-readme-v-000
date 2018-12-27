// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

let input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    alert('Can"t type "g"');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});