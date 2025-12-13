const para=document.createElement('p');
para.textContent='This is a new paragraph added to the DOM.';
document.body.appendChild(para);

const heading=document.createElement('h2');
heading.textContent='This is a new heading added to the DOM.';
document.body.insertBefore(heading, para);

const div=document.createElement('div');

const div_para=document.createElement('p');
div_para.textContent="I'm in a div.";
div.appendChild(div_para);

const div_heading=document.createElement('h3');
div_heading.textContent='Me too!';
div.appendChild(div_heading);

document.body.appendChild(div);

const button=document.querySelector("#btn2")
button.onclick = function() {
    alert("Hello world!");
}
const button2=document.querySelector("#btn3")
button2.addEventListener('click', function(e) {
    alert("Hello world!");
    console.log(e);
    console.log(e.bubbles)
    console.log(e.target)
    console.log(e.type)
    console.log(e.eventPhase)
    e.target.style.background = "blue";
});
