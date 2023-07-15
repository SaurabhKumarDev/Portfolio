//Font's
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Java Developer', 'Complex Problem Solver'],
    typeSpeed: 50,
});


// Nav bar
const hamburger = document.querySelector(".hamburger");
const right = document.querySelector(".right");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    right.classList.toggle("active");
})