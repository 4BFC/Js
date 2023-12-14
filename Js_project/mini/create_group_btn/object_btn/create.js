//variable.js
const body = document.querySelector('body') //=> template bring to body tag
const parent = document.querySelector('.parent') //div
console.log(body)
const button = document.querySelector('.create')
let i = 0;

// let btnArray = [...child_btn]
//element.js
function create_element_btn(parent, i) {
  const child = document.createElement('div')
  parent.append(child)
  child.innerHTML = `<input type="button" value="new_btn${i}" class="child_btn">`
  return child
}

function new_create_btn(parent) {
  const child = document.createElement('input')
  child.type = "button"
  child.value = "new_create"
  child.className = "child_btn"
  parent.append(child)

  return child
}

//create_fn.js
button.addEventListener('click',
  () => {
    create_element_btn(body, i)
    i += 1
    //new_create_btn(body)
    const child_btn = document.querySelectorAll('.child_btn')
    console.log(child_btn)
  }
)

//console.log(new_btn)
