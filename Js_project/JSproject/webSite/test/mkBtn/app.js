const btn = document.querySelector('#btn');
const btnDiv = document.querySelector('#btnDiv');
let i = 0;
console.log('button');
console.log(btn);

function crEate(name) {//cre : btn
  const creElement = document.createElement('button');
  creElement.id = creElement.innerText = `${name}${i++}`;
  return creElement;
}

function delEte(name) { }

//자기 자신을 재정렬하는 알고리즘.. 새로고침을 자동으로 하면서 배열을 다시 맞추는...
function add() {//btn
  let creElement = crEate('button');//프로퍼티
  console.dir(creElement);
  console.log('Create!!')
  btnDiv.append(creElement);
}

// btn.addEventListener('click', () => console.log('Click!!'));
btn.addEventListener('click', add);//