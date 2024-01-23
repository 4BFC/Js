import * as get_var from './variable.js'

get_var.menu_submit.addEventListener('click', () => {
  //redirect
  window.location.href = '/index.html';
})

console.log("import new_menu.js");

//새로운 메뉴 등록 함수 -> json파일을 수정하는 구간
//글을 저장할 수 있는 format.js가 필요
//vanilla js로 json파일을 수정하는 것은 보안상 문제가 있다. 이를 해결 할 수 있는 방안을 모색해야한다.