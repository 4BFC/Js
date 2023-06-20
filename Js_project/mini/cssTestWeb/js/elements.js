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

/** margin_Btn */ //->수정
const mRb = getIDelement('margin_R-Btn');
console.log(mRb);
const mLb = getIDelement('margin_L_Btn');
console.log(mLb);
const mUb = getIDelement('margin_U_Btn');
console.log(mUb);
const mDb = getIDelement('margin_D_Btn');
console.log(mDb);
const mResetb = getIDelement('margin_Reset_Btn');
console.log(mResetb);
// mMb.disabled = true;

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

//current 변수 - 이중 선언
// let currentRight = Object.style.marginRight = `${-45}px`
// let currentBottom = Object.style.marginBottom = `${45}px`
// let currentLeft = Object.style.marginLeft = `${45}px`
// let currentTop = Object.style.marginTop = `${-145}px`

//margin 시계방향 위쪽,오른쪽,아래,왼쪽
const ComputedStyle = window.getComputedStyle(Object);
console.log(ComputedStyle.margin);

getClickEvent(mRb, () => { console.log('Right_Click!'); });
getClickEvent(mLb, () => { console.log('Left_Click!'); });
getClickEvent(mUb, () => { console.log('Up_Click!'); });
getClickEvent(mDb, () => { console.log('Down_Click!'); });
getClickEvent(mResetb, () => { console.log('Reset_Click!'); });

// getClickEvent(mPb, () => {
//   console.log('mPb Click!');
//   // Object.style.margin += `${10}px`
//   Object.style.marginTop = `${size += 10}px`
//   console.log(Object.style.marginTop);
// }
// );
// getClickEvent(mRb, () => {
//   console.log('mRb Click!');
//   console.log(ComputedStyle.margin);
// }
// );
// getClickEvent(mMb, () => {
//   console.log('mMb Click!');
//   Object.style.marginTop = `${size -= 10}px`
//   console.log(Object.style.marginTop);
// }
// );


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