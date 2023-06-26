//set은 나중에 만들어야함 한 스크립트를 구조화 시킨 후에 만들어야한다.

//객체 지정 함수
function get_create_Class(element) {
  const name = document.querySelector(`.${element}`);
  return name;
}

//버튼 함수
function get_ClickBtn(element, option, fn) {
  const name = element.addEventListener(`${option}`, fn);
  return name;
}

//객체 생성 함수
function get_create_Element(option) {
  const name = document.createElement(option);
  return name;
}

//객체 클래스명 생성 및 부모자식 연결 함수
function get_create_box(class_name, value, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = value;
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

function overload(a, b, c) {
  if (typeof c === 'function') {

  } else if (typeof b === 'function') {

  } else {

  }
}

//객체 지정 함수를 통한 변수 선언
const title = get_create_Class('title');
const comment = get_create_Class('comment');
const input_btn = get_create_Class('input_btn');

const list = get_create_Class('list');

//클릭시 생성 및 함수 선언
get_ClickBtn(input_btn, 'click', () => {
  let parent = get_create_Box('box_backColor', 'div', list);
  // let parent = get_create_Element('div');
  // list.appendChild(parent);
  get_create_box('title_box', title.value, 'div', parent);
  get_create_box('comment_box', comment.value, 'div', parent);
})
