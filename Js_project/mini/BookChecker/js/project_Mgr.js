import { get_ClickBtn } from './ClickBtn.js';
import { get_create_Box } from './create_Box.js';
//해당 함수를 가지고 있는 스크립트에 import와 export
import { get_create_Box_value } from './create_Box_value.js';
import { get_create_Class } from './create_Class.js';
//해당 함수를 가지고 있는 스크립트에 import와 export


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
  get_create_Box_value('title_box', title.value, 'div', parent);
  get_create_Box_value('comment_box', comment.value, 'div', parent);
})
