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

//클릭
function get_ClickBtn(element, option, fn) {
  const name = element.addEventListener(`${option}`, fn);
  return name;
}

//삭제
function remove_Element(element, child) {
  const name = element.remove(child);
  return name;
}

//input 값 삭제
function clear_Input() {
  input_comment.value = "";
  // selected = null;
}

function get_create_Box(class_name, element, parent) {
  const element_box = get_create_Element(`${element}`);
  console.log(delete_btn);
  element_box.innerHTML = `
    <div class="list_element backColor_element">
      <img class="user_img" src="./img/user.png" alt="">
      <div class="comment">
        <span>guess9</span>
        <span>2023/08/12</span>
        <span class="comment_value">
          ${input_comment.value}
        </span>
      </div>
      <div>
      <button class="delete_btn">❌</button>
      <button class="edit_btn">✍</button>
      </div>
    </div>`;
  // appendChild
  //parent.appendChild(element_box);
  parent.insertBefore(element_box, parent.firstChild);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  selected = null;
  // clear_Input();

  return element_box;
}

const button = get_create_Class('user_input');
const input_comment = get_create_Class('input');
const parent_element = get_create_Class('user_comment_list');
const user_ = get_create_Class('user_');

//comment_value
const comment_value = get_create_Class('comment_value');
const delete_btn = get_create_Class('delete_btn');
const edit_btn = get_create_Class('edit_btn');

//selected
let selected = null;

//=============================== Add
//댓글 추가 기능
get_ClickBtn(button, 'click', (e) => {
  e.preventDefault();
  //댓글 조건문
  //이 조건문도 굉장히 정리를 잘해야함...
  if (input_comment.value == "") {
    alert("댓글을 작성 해주세요.")
  }
  // else if (input_comment.value.length < 50) {
  //   alert("댓글을 50자 이상 작성 해주세요.")
  // }

  else {
    if (selected == null) {
      get_create_Box('user_', 'li', parent_element);
    }
    else {
      console.log(selected.nodeName);//undefined
      console.log("변경전 내용" + selected.textContent);
      // comment_value.textContent = input_comment.value;
      // selected = input_comment.value;
      //=> 여기가 문제. selected가 가지고 있는 값이 input_comment.value로 업데이트가 되면서 아래 nodeName들이 사라진다.
      // console.log(selected.textContent.nodeName);
      selected.textContent = input_comment.value
      console.log(e.target.nodeName);
      console.log("변경 내용 : " + input_comment.value);
      console.log("등록");
      selected = null;
    }
  }
  clear_Input();
})

//=============================== Delete
//삭제 버튼 이 부분을 명확히 정리해줄 필요가 있다. 다이어그램을 만들어 볼 필요가 있다.
get_ClickBtn(parent_element, 'click', (e) => {
  target = e.target;
  if (target.classList.contains("delete_btn")) {
    target.parentElement.parentElement.remove();
    console.log("remove");
  }

  // clear_Input();
})

//=============================== Edit
parent_element.addEventListener("click", (e) => {
  console.log("edit")
  target = e.target;
  if (target.classList.contains("edit_btn")) {//child searching
    selected = target.parentElement.parentElement.querySelector(".comment_value");//해당 댓글을 지정해야한다.
    console.log(selected.nodeName);
    // selected = target.parentElement.parentElement.comment_value.textContent;
    input_comment.value = selected.textContent;
    console.log(selected);
  }

  // clear_Input();
});