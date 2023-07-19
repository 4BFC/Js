import { add } from "./add.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { subtract } from "./subtract.js";
import { clear } from "./clear.js";


export class Calculator {
  constructor() {
    this.result = 0
    // if (value_1 == null) {
    //   alert("입력해주세요")
    // }
    // else {  = value_1; }
  }

  add(number) {
    add.call(this, number);
    //add.bind(this)(number);
  };

  subtract(number) {
    subtract.call(this, number);
  };

  multiply(number) {
    multiply.call(this, number);
  };

  divide(number) {
    divide.call(this, number);
  };

  clear() {
    clear.call(this, number);
  };
}