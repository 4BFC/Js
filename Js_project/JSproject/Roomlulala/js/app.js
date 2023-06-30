//객체 지정 함수
function get_create_Class(element) {
  const name = document.querySelector(`.${element}`);
  return name;
}

//객체 생성 함수
function get_create_Element(option) {
  const name = document.createElement(option);
  return name;
}

function get_ClickBtn(element, option, fn) {
  const name = element.addEventListener(`${option}`, fn);
  return name;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = `<div class="list_element backColor_element">
    <img class="user_img" src="./img/user.png" alt="">
    <div class="comment">
      <span>guess9</span>
      <span>2023/08/12</span>
      <span>
        ${input_comment.value}
      </span>
    </div>

  </div>`;
  // appendChild
  //parent.appendChild(element_box);
  parent.insertBefore(element_box, parent.firstChild);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}

const button = get_create_Class('user_input');
const input_comment = get_create_Class('input');
const parent_element = get_create_Class('user_comment_list');

get_ClickBtn(button, 'click', () => {
  get_create_Box('user_', 'li', parent_element);
  console.log('hi');
})