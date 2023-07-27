// import { money } from "./variable_Mgr.mjs"

export const My_money = {
  money: 1000,//여기에서 money의 값이 저장되는 것인가?

  get_money(m) {
    console.log(m);
  },

  set_money(m) {
    My_money.money = m;
    console.log(`My_money.money : ${My_money.money}/m : ${m}`)

  },
}

