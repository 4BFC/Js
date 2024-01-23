import * as get_data_fn from './function/data_fn.js'
///tagName, type, value, className, idName, name

//이슈로 정리하는 것도 할 것
//fetch API
fetch('./data/menu.json')
  .then(res => res.json()) //json파일로 response
  .then(
    data => get_data_fn.btn_data(data)
  ) //해당 데이터를 도출

// console.log(document.querySelectorAll('.menu_btn'))
console.log("import menu_btn.js");