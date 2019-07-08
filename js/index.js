const display = document.querySelector('.calculator .display');

document.querySelectorAll ('.digits button')
.forEach(digit => digit.addEventListener('click', digitPressed));
function digitPressed(ev){
    display.value += ev.target.innerText
}

document
.querySelectorAll ('.opers button')
.forEach(oper => oper.addEventListener('click', operPressed));
function operPressed(ev){
    display.value += ev.target.innerText
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    display.value = eval(display.value);
}

document.querySelector('.reset').addEventListener('click', resetPressed);
function resetPressed() {
  display.value = '';
}

document.querySelector('.back').addEventListener('click', backPressed);
function backPressed() {
  display.value = display.value.substring(0, display.value.length-1);
}

document.querySelector('.sqrt').addEventListener('click', sqrt);

function sqrt() {
   let sqrtDisplay = Math.sqrt(display.value);
   sqrtDisplay.value = sqrtDisplay;
   display.value = sqrtDisplay;
}

function dotOperation() {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}