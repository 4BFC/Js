import { Calculator } from "./Calculator.js";

const value_1 = document.querySelector(".value_1");
const value_2 = document.querySelector(".value_2");

const plus = document.querySelector(".plus")
const min = document.querySelector(".min")
const mul = document.querySelector(".mul")
const divi = document.querySelector(".divi")
const reset = document.querySelector(".reset")

const calculator = new Calculator();
calculator.add(5);
console.log(calculator.result);
// calculator.subtract(2);
// console.log(calculator.result);
// calculator.multiply(3);
// console.log(calculator.result);
// calculator.divide(2);
// console.log(calculator.result); // 출력: 6
// calculator.clear();
// console.log(calculator.result); // 출력: 0
