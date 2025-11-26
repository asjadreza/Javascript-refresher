// generate unlimited random colors
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())
let timer
function changeBg() {
  document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function () {
  if(!timer){
    timer = setInterval(changeBg, 1000)
  }
    
};

const stopChangingColor = function () {
    clearInterval(timer)
    timer = null
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
