//https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/radio
const star_form = document.querySelector(".star_form");
// console.log(star.nodeName);

star_form.addEventListener("submit", (e) => {
  target = e.target;
  console.log(target.value);
})