let input = document.getElementById("typeText")
// console.log(input);

function onIP() {

let btn = document.getElementById("btnX");
btn.addEventListener("click", function x() {
    window.open(input.value, "", "width=375,height=812");
})

let btn2 = document.getElementById("btnNote");
btn2.addEventListener("click", function note() {
    window.open(input.value, "", "width=412,height=869");
})

let btn3 = document.getElementById("btnIpad");
btn3.addEventListener("click", function ipad() {
    window.open(input.value, "", "width=1024,height=1366");
})

let btn4 = document.getElementById("btnImac");
btn4.addEventListener("click", function mac() {
    window.open(input.value, "", "width=1920,height=1080s");
})
}
