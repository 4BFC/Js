//요소 지정 함수 -> id
function getIDelement(ele_Id) {
  const button = document.querySelector(`#${ele_Id}`);
  return button;
}
//요소 지정 함수 -> class
function getCLelement(ele_Class) {
  const button = document.querySelector(`.${ele_Class}`);
  return button;
}

/**클릭 이벤트 함수*/
function getClickEvent(Btn, fn) {
  return Btn.addEventListener('click', fn)
}

/** padding_Btn */
const pPb = getIDelement('padding_plus_Btn');
console.log(pPb);
const pRb = getIDelement('padding_reset_Btn');
console.log(pRb);
const pMb = getIDelement('padding_minus_Btn');
// console.log(pMb); pMb.disabled = true;

/** margin_Btn */
const mPb = getIDelement('margin_plus_Btn');
console.log(mPb);
const mRb = getIDelement('margin_reset_Btn');
console.log(mRb);
const mMb = getIDelement('margin_minus_Btn');
console.log(mMb); mMb.disabled = true;

/** border_Btn */
const bPb = getIDelement('border_plus_Btn');
console.log(bPb);
const bRb = getIDelement('border_reset_Btn');
console.log(bRb);
const bMb = getIDelement('border_minus_Btn');
console.log(bMb); bMb.disabled = true;

/**Object -> only use Object, Expect Object2 */
const Object = getCLelement('Object');

let size = 0;

/** padding_Click */
getClickEvent(pPb, () => {
  console.log('pPb Click!')
  Object.style.padding = `${size += 10}px`;

  // let Obj_padding = Object.style.padding;
  // Obj_padding = Obj_padding + `${10}px`
}
);
getClickEvent(pRb, () => {
  console.log('pRb Click!')
  Object.style.padding = `${0}px`
}
);
getClickEvent(pMb, () => {
  console.log('pMb Click!')
  Object.style.padding = `${size -= 10}px`

  if (0 > size) {
    size = 0;
  }
}
);

/** margin_Click */
getClickEvent(mPb, () => {
  console.log('mPb Click!');
  Object.style.margin += `${10}px`
}
);
getClickEvent(mRb, () => {
  console.log('mRb Click!');
  Object.style.margin = `${-45}px`;
}
);
getClickEvent(mMb, () => {
  console.log('mMb Click!');
  Object.style.margin = `${-10}px`
}
);

/** border_Click */
getClickEvent(bPb, () => {
  console.log('bPb Click!');
  Object.style.border = `${10}px`
}
);
getClickEvent(bRb, () => {
  console.log('bRb Click!');
  Object.style.border = `${0}px`
}
);
getClickEvent(bMb, () => {
  console.log('bMb Click!');
  Object.style.border = `${-10}px`
}
);