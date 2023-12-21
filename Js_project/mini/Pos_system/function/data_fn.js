import * as get_var from '../variable.js';
import * as get_tag_fn from './tag_fn.js'

//fetch와 직접적으로 연결되는 부분이다. -> data_fn.js
export function btn_data(data) {
  let data_range = data.length; //fetch를 통해 json파일을 불러온 data길이를 변수에 저장
  for (let i = 0; i < data_range; i++) {
    const create_input = get_var.create_tag('input'); //variable.js의 input태그 생성 함수
    const menu_btn = get_tag_fn.ctrl_btn(create_input, "button", `${data[i].name}`, "menu_btn", "", "");
    let parent_btn = get_var.menu_btn;
    parent_btn.append(menu_btn);
    //foreach문을 넣어서 해당 구문을 spread하여 데이터 index에 맞는 값을 value에 대입한다.
  }

  //image
  const create_img = get_var.create_tag('img'); //이미지 태그를 미리 생성하는 변수
  console.log(create_img)
  //이미지 프로퍼트 설정


  //해당 버튼들을 찾아주는 document가 필요하다.
  const btn_group = document.querySelectorAll('.menu_btn');
  btn_group.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      let parent_view = get_var.view_port; //해당 tag는 매뉴의 description을 삽입하는 div영역이다.
      //이후 URL 값도 변경 할 수 있어야 한다. url ?id= 값이 undefine일 경우 해당 parent의 tag는 준비상태가 되어야한다.
      parent_view.innerHTML = `
      <h2>${data[index].description}</h2> 
      <hr> 
      <h2>${data[index].price}</h2>`
      get_tag_fn.ctrl_img(create_img, `${data[index].image}`, "", "menu-img", "menu1-img", "");
    })
  })

  let parent_img = get_var.menu_img;
  parent_img.append(create_img);
}

console.log("import data_fn.js");