import * as get_var from './variable.js';
///tagName, type, value, className, idName, name

//ctrl for button
function ctrl_btn(tag, type, value, className, idName, name) {
  tag.type = type;
  tag.value = value;
  tag.className = className;
  tag.id = idName;
  tag.name = name;
  return tag;
}

function btn_data(n) {
  let data_range = n.length; //fetch를 통해 json파일을 불러온 data길이를 변수에 저장
  for (let i = 0; i < data_range; i++) {
    const create_input = get_var.create_tag('input'); //variable.js의 input태그 생성 함수
    const test = ctrl_btn(create_input, "button", `${n[i].name}`, "test_btn", "", "");
    get_var.menu_btn.append(test);
    //foreach문을 넣어서 해당 구문을 spread하여 데이터 index에 맞는 값을 value에 대입한다.
  }

  const btn_group = document.querySelectorAll('.test_btn');
  btn_group.addEventListener('click', (e) => {
    console.log(e.target);
  })
}

//이슈로 정리하는 것도 할 것
//fetch API
fetch('./data/menu.json')
  .then(res => res.json()) //json파일로 response
  .then(
    data => btn_data(data)
  ) //해당 데이터를 도출

//for문으로 버튼 여러개 생성하기 => json파일로 메뉴 정보를 가지고 와서 해당 length만큼 for문을 돌려서 메뉴 버튼을 생성한다.

//해당 버튼들을 찾아주는 document가 필요하다.
console.log(document.querySelectorAll('.test_btn'));
// btn_group = document.querySelectorAll('.test_btn');

// console.log(document.querySelectorAll('.menu_btn'))
console.log("import menu_btn.js");