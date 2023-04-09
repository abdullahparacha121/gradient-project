const color1=document.getElementById('color1');
const color2=document.getElementById('color2');
const body=document.getElementById('body');
const output=document.querySelector('.output');
const generateBtn=document.getElementById('generatebtn');
const refreshBtn=document.getElementById('refreshbtn');
const direction=document.getElementById('select');
const cssOutput=document.getElementById('csstext');
const copyBtn=document.getElementById('copy');
const randomBtn=document.getElementById('randombtn');

// function callalert()
// {
//     alert("action performed");
// }

//generateBtn.addEventListener('click',callalert);

function randomGradient(){
    const randomColor1 = '#'+(Math.floor(Math.random()*16777215).toString(16));
    color1.value=randomColor1;
    const randomColor2 = '#'+(Math.floor(Math.random()*16777215).toString(16));
    color2.value=randomColor2;
    const randomgradient=`linear-gradient(${direction.value},${randomColor1},${randomColor2})`;
    body.style.background=randomgradient;
    output.style.background=randomgradient;
    cssOutput.value = `background-image: ${randomgradient};`;
}

function generateGradient(){
   
    const gradient=`linear-gradient(${direction.value},${color1.value},${color2.value})`;
    body.style.background=gradient;
    output.style.background=gradient;
    cssOutput.value = `background-image: ${gradient};`;

}

generateBtn.addEventListener('click',generateGradient);

randomBtn.addEventListener('click',randomGradient);

refreshBtn.addEventListener('click',function(){
color1.value= '#d91ce6';
color2.value='#fada07';
direction.value ='to right';
cssOutput.value ='';
output.style.background='cornflowerblue';
body.style.background='cornflowerblue';

});

copyBtn.addEventListener('click',function(){
cssOutput.select();
cssOutput.setSelectionRange(0,99999);
document.execCommand('copy');
});