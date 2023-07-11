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

//local_storage set 함수
function set_local_Storage(key, value) {
  const name = window.localStorage.setItem(`${key}`, `${value}`)
  return name;
}

//객체 클래스명 생성 및 부모자식 연결 함수
function get_create_Box_value(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = `
  <div class='title_box'>${title.value}</div>
  <div class='comment_box'>${comment.value}</div>
  `;
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);

  //local_Storage key와 value 지정 조건문
  // if (value === title.value) {
  //   set_local_Storage(title.value);
  // } else if (value === comment.value) {
  //   set_local_Storage(title.value, comment.value);
  // }

  return element_box;
}

//** create box를 innerHTML함수를 사용해서 변경할 수 있게 코드 변경
function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

//객체 지정 함수를 통한 변수 선언
const title = get_create_Class('title');
const comment = get_create_Class('comment');
const input_btn = get_create_Class('input_btn');
const form_tag = document.querySelector('.Create_box');
const list = get_create_Class('list');

//event를 사용해서 응용할 것
//클릭시 생성 및 함수 선언

// get_ClickBtn(input_btn, 'submit', (e) => {
//   /** =>edited
//    let parent = get_create_Element('div');
//    list.appendChild(parent);
//    get_create_Box_value('title_box', title.value, 'div', parent);
//    get_create_Box_value('comment_box', comment.value, 'div', parent);
//    set_local_Storage(comment_value, title_value);
//   */
//   e.preventDefault();
//   target = e.target;
//   console.log(`target : ${target.className}`);
//   let parent = get_create_Box('box_backColor', 'div', list);
//   get_create_Box_value('list_group', 'div', parent);
// })

form_tag.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("test");
  // target = e.target;
  // console.log(`target : ${target.className}`);
  // let parent = get_create_Box('box_backColor', 'div', list);
  // get_create_Box_value('list_group', 'div', parent);
});



