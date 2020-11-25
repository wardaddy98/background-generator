const css= document.querySelector('h3');
const input1= document.querySelector('.color1');
const input2= document.querySelector('.color2');
let body= document.getElementsByTagName('body')[0];

input1.addEventListener("input",gradient);


input2.addEventListener("input", gradient);

function gradient(e){
    body.style.background= 'linear-gradient(to right, ' +input1.value + ',' + input2.value +')' ;
    css.textContent= body.style.background + ';'; 
}