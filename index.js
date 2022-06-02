let hours = document.querySelector(".hours");
let minuts = document.querySelector(".minuts");
let seconds = document.querySelector(".seconds");
let session = document.querySelector(".session");
const offBtn = document.querySelector(".off");
const onBtn = document.querySelector(".on");
const timeNum = document.querySelectorAll(".screen span");

offBtn.onclick = function () {
  timeNum.forEach((num) => {
    num.classList.add("off");
  });
};

onBtn.onclick = function () {
  timeNum.forEach((num) => {
    num.classList.remove("off");
  });
};

function getTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  hours.innerHTML = h;
  minuts.innerHTML = m;
  seconds.innerHTML = s;
  if (h >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
}

let ineterval = setInterval(getTime, 10);
