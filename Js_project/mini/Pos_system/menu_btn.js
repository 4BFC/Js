import * as get_var from './variable.js'
///tagName, type, value, className, idName, name

//ctrl for button
function ctrl_btn(tag, type, value, className, idName, name) {
  tag.type = type;
  tag.value = value;
  tag.className = className;
  tag.id = idName;
  tag.name = name
  return tag
}

//fetch API
fetch('./data/menu.json').then(res => res.json()).then(data => console.log(data))

//for문으로 버튼 여러개 생성하기 => json파일로 메뉴 정보를 가지고 와서 해당 length만큼 for문을 돌려서 메뉴 버튼을 생성한다.
for (let i = 0; i < 5; i++) {
  const create_input = get_var.create_input();
  const test = ctrl_btn(create_input, "button", "Click!", "test_btn", "", "");
  get_var.menu_btn.append(test)

  //foreach문을 넣어서 해당 구문을 spread하여 데이터 index에 맞는 값을 value에 대입한다.
}
// console.log(document.querySelectorAll('.menu_btn'))
console.log("import menu_btn.js")