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



function displayDate() {
    setInterval(() => { dateDiv.innerHTML = new Date() }, 1000)
}

displayDate();
