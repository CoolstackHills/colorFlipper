/* const colors = ["green", "white", "black", "purple", "orange", "red", "rgba(133,122,200)", "#f15025"]; */

const colors = ["blue", "white", "black", "yellow", "red"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 - 7
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}