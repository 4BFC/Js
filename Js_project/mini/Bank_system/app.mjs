// import { get_money, set_money } from "./money_Mgr.mjs";
// import { money } from "./variable_Mgr.mjs";
import { My_money } from "./money_Mgr.mjs";
console.log(`check first Money = ${My_money.money}`);
My_money.get_money(My_money.money);
console.log(`check second Money = ${My_money.money}`);

My_money.set_money(10);
//set기능을 하지 않는다. 이는 아마도 얕은 복사를 통해서 발생한 오류
// money_Mgr.mjs:8 Uncaught TypeError: Assignment to constant variable.
//     at set_money (money_Mgr.mjs:8:9)
//     at app.mjs:9:1
console.log(`check third Money = ${My_money.money}`);

// get_money(money);
// console.log(`check fourth Money = ${money}`);