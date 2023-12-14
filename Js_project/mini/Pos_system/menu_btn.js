import * as get_var from './variable.js'

//for문으로 버튼 여러개 생성하기 => json파일로 메뉴 정보를 가지고 와서 해당 length만큼 for문을 돌려서 메뉴 버튼을 생성한다.
for (let i = 0; i < 5; i++) {
  const create_div = get_var.create_div()
  get_var.menu_btn.append(create_div)
  create_div.innerHTML =
    `<input type="button" class="menu_group" value="button${i}">`
  //foreach문을 넣어서 해당 구문을 spread하여 데이터 index에 맞는 값을 value에 대입한다.
}
// console.log(document.querySelectorAll('.menu_btn'))
console.log("import menu_btn.js")