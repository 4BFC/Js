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
//const sale = document.querySelector("#sale"); //sale.Style.Color = "gray";

//상황조건
const money = document.querySelector("#money");
let myMoney = 10;

//------------------------------------------------------------------------function.js
import { dicePlay } from "./function.js";
//import { store } from "./function.js";

//dice
const dice = document.querySelector("#dice");
const dic_btn = document.querySelector("#dic_btn");
let PRICE = 0;
//콜백함수에 주의
dic_btn.addEventListener("click", () => {
  PRICE = dicePlay(dice);
  myMoney -= 1;
  money.innerText = `Money : ${myMoney}c`;
  console.log(myMoney);

  if (myMoney < 0) {
    myMoney = 0;
    money.innerText = `Money : ${myMoney}c`;
    console.log(myMoney);
    console.log("더 이상 불가능");
  }
});
//------------------------------------------------------------------------function.js

//구매버튼
function buyBtn() {
  if (!(myMoney < PRICE)) {
    myMoney -= PRICE; console.log(`myMoney: ${myMoney}`);
    money.innerText = `Money : ${myMoney}c`;
  } else {
    console.log("구매불가");
  }
}
buy.addEventListener("click", buyBtn);

//------------------------------> update()
let daycount = 1;

function update() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  time.innerText = `Time : ${seconds}`;

  //퀘스트
  if (seconds === "00") {//===는 타입까지 맞아야한다.
    console.log("quest!!");
    daycount += 1;
    console.log("daycount" + daycount);
    day.innerText = `Day : ${daycount}`;
  }

  //시간 조건 노동
  if (!((daycount % 2) > 0)) {
    story.innerText = "노동하기"; //수락이나 버튼을 눌렀을 때 반응해서 money가 올라가게 만들기 이후에 액션들이 추가될 것

    //노동-button
    const btn = document.createElement("button");
    btn.innerText = "수락";
    //story.appendChild(btn);
    btn.addEventListener("click", () => { myMoney += 1; money.innerText = `Money : ${myMoney}c`; })// mkmoney = 

  } else if ((daycount % 2) > 0) {
    story.innerText = "NOT YET!";
    console.log("NOT YET");
  }

  console.log(`${daycount},${daycount % 2}`);
}//------------------------------> update()


//console.log(update());

setInterval(update, 1000);
