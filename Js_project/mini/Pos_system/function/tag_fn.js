//ctrl for button -> btn_fn.js
export function ctrl_btn(tag, type, value, className, idName, name) {
  tag.type = type;
  tag.value = value;
  tag.className = className;
  tag.id = idName;
  tag.name = name;
  return tag;
}

export function ctrl_img(tag, src, alt, className, idName, name) {
  tag.src = src;
  tag.alt = alt;
  tag.className = className;
  tag.idName = idName;
  tag.name = name;
}

console.log("import btn_fn.js");