let button = document.querySelector("#button")
let bg = document.getElementsByTagName("body")[0]
console.log(bg)
button.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    bg.style.background = `rgb(${r}, ${g}, ${b})`;
})