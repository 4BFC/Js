//https://eunyoe.tistory.com/235
//https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/radio
//https://shubamba.tistory.com/65
//https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=inyoung313&logNo=220618323942
const star_form = document.querySelector(".star_form");
// console.log(star.nodeName);

star_form.addEventListener("submit", (e) => {
  target = e.target;
  console.log(target.value);
})