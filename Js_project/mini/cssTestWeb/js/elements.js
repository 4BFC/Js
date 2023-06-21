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

//margin 시계방향 위쪽,오른쪽,아래,왼쪽
const ComputedStyle = window.getComputedStyle(Object);
console.log(ComputedStyle.margin);
let r_size = 0;
let l_size = 0;
let u_size = 0;
let d_size = 0;
//current 변수 - 이중 선언 -> 왜 변수로 지정하면 값이 전달되지 않는가?
//ex) currentRight = `${Margin_size += 10}px`

let currentRight = Object.style.marginRight;
let currentLeft = Object.style.marginLeft;
let currentTop = Object.style.marginTop;
let currentBottom = Object.style.marginBottom;

//window.getComputedStyle로 접근한 margin 값
let current_Right = ComputedStyle.marginRight;
let current_Left = ComputedStyle.marginLeft;
let current_Top = ComputedStyle.marginTop;
let current_Bottom = ComputedStyle.marginBottom;
//위 둘의 차이는?
//나중에 함수 구현으로 셋과 겟을 만들 예정

getClickEvent(mRb, () => {
  current_Right = Object.style.marginRight = `${r_size += 10}px`
  console.log(`${current_Right} => Right_Click!`);
});
getClickEvent(mLb, () => {
  current_Left = Object.style.marginLeft = `${l_size += 10}px`
  console.log(`${current_Left} => Left_Click!`);
});
getClickEvent(mUb, () => {
  current_Top = Object.style.marginTop = `${u_size += 10}px`
  console.log(`${current_Top} => Up_Click!`);
});
getClickEvent(mDb, () => {
  current_Bottom = Object.style.marginBottom = `${d_size += 10}px`
  console.log(`${current_Bottom} => Down_Click!`);
});
getClickEvent(mResetb, () => {
  console.log(`Reset_Click!`);
  current_Right = Object.style.marginRight = `${0}px`;
  current_Left = Object.style.marginLeft = `${0}px`;
  current_Top = Object.style.marginTop = `${0}px`;
  current_Bottom = Object.style.marginBottom = `${0}px`;
  r_size = 0;
  l_size = 0;
  u_size = 0;
  d_size = 0;
});

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