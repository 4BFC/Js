//ctrl for button -> btn_fn.js
export function ctrl_btn(tag, type, value, className, idName, name) {
  tag.type = type;
  tag.value = value;
  tag.className = className;
  tag.id = idName;
  tag.name = name;
  return tag;
}

console.log("import btn_fn.js");