const clock = document.querySelector("#clock");
const day = document.querySelector("#day");
const time = document.querySelector("#time");
let daycount = 0;
//시계 만들기
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  time.innerText = `Time : ${seconds}`;

  if (seconds === "00") {//===는 타입까지 맞아야한다.
    console.log("quest!!");
    daycount += 1;
    day.innerText = `Day : ${daycount}`;
  }
}

console.log(getClock());

setInterval(getClock, 1000);
