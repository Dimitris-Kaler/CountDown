const date = new Date();
const dateDiv = document.getElementById("date");
let watch = document.getElementById("watch");
let watchBefore = window.getComputedStyle(watch, "::before");
const numberDisplay = document.getElementById("numberSquare");
const startSTopBtn=document.getElementsByClassName("start")[0]
const buttons = document.getElementsByClassName("btn");
const actionBtns=document.getElementsByClassName("actbtn")
const resetBtn=document.getElementsByClassName("actbtn")[1];
let active=false;
let intervalId;


///display DATE 
function displayDate() {
    setInterval(() => { dateDiv.innerHTML = new Date() }, 1000)
}

displayDate();

//EVENTS FOR BUTTONS
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", () => {
       
        btn.disabled=false
        if (btn.innerHTML == "+") {
            let parsedNumber = parseInt(numberDisplay.innerHTML);
            parsedNumber += 1
            console.log(parsedNumber);
            numberDisplay.innerHTML = parsedNumber
        }
        if (btn.innerHTML == "-") {
            let parsedNumber = parseInt(numberDisplay.innerHTML);
            parsedNumber -= 1
            if (parsedNumber < 0) {
                numberDisplay.innerHTML = 0;
            } else {
                numberDisplay.innerHTML = parsedNumber
            }
        }


        })});
