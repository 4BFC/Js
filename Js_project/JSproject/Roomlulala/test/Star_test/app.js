//https://eunyoe.tistory.com/235
const star_form = document.querySelector(".star_form");
const show = document.querySelector(".result");
// console.log(star.nodeName);

star_form.addEventListener("click", (e) => {
  target = e.target;
  //NaN이 나온 이유는 label때문이다.
  if (target.classList.contains('star_btn')) {
    star_value = parseInt(target.value) / 2;
    console.log(star_value);
    show.innerHTML = `
    <form class="star_result">
    <fieldset class="rate_result">
      <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
      <label for="rating10_result" title="5점"></label>
      <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
      <label for="rating8_result" title="4점"></label>
      <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
      <label for="rating6_result" title="3점"></label>
      <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
      <label for="rating4_result" title="2점"></label>
      <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
      <label for="rating2_result" title="1점"></label>
    </fieldset>
  </form>
    `
  }

})

