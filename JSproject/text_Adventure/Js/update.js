//STANDARD VALUE
//시간
const clock = document.querySelector("#clock");
const day = document.querySelector("#day");
const time = document.querySelector("#time");

//시나리오
const story = document.querySelector("#story"); //스토리 내용 기입
const quest = document.querySelector("#quest"); //퀘스트 내용 기입

//버튼
const attack = document.querySelector("#atk");
const run = document.querySelector("#run");
const buy = document.querySelector("#buy");
const sale = document.querySelector("#sale");

//상황조건
const money = document.querySelector("#money");



//시계 만들기 -> update()
function update() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let daycount = 1;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  time.innerText = `Time : ${seconds}`;

  //퀘스트
  if (seconds === "00") {//===는 타입까지 맞아야한다.
    console.log("quest!!");
    daycount += 1;
    day.innerText = `Day : ${daycount}`;
  }

  let myMoney = 10;

  if ((daycount % 2) === 0) {
    story.innerText = "노동하기"; //수락이나 버튼을 눌렀을 때 반응해서 money가 올라가게 만들기 이후에 액션들이 추가될 것

    //노동-button
    const btn = document.createElement("button");
    btn.innerText = "수락";
    story.appendChild(btn);
    btn.addEventListener("click", mkmoney = () => { myMoney += 1; money.innerText = `Money : ${myMoney}c`; })

  } else if (!(daycount % 2) === 0) {
    story.innerText = "NOT YET!";
    console.log("NOT YET");
  }

}

//console.log(update());

setInterval(update, 1000);
