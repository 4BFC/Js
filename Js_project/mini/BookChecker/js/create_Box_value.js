import { get_create_Element } from './create_Element.js';

//child : 객체 클래스명 생성 및 부모자식 연결 함수
export function get_create_Box_value(class_name, value, element, parent) {
  const element_box = get_create_Element(`${element}`);
  element_box.innerHTML = value;
  // appendChild
  parent.appendChild(element_box);
  element_box.className = `${class_name}`;
  console.log(element_box.className);
  return element_box;
}