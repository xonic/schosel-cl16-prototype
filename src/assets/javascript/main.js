// Select all HTML elements with class .js-input
var inputs = document.getElementsByClassName('js-input');

function formChangeHandler(){
  document.querySelector('html').classList.add('bets-changed');
}

// Attach focus & blur handlers to selected inputs
Array.prototype.forEach.call(inputs, function(element, index, array){
  element.addEventListener('change', formChangeHandler);
});
