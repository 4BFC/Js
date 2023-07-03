* index.html *
```
<a href="#" class="btn btn-warning btn-sm edit">Edit</a>
<a href="#" class="btn btn-danger btn-sm delete">Delete</a>
```
* app.js *
```
document.querySelector("#student-list").addEventListener("click", (e) => {
  // e.preventDefault();
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();//?
    showAlert("Student Data Deleted", "danger");//=>Bootstrap
  }
  // clearFields();
});
```
> href(하이퍼링크)에 #이 있고 없고의 차이로 app.js의 e.preventDefault(); 필요 여부가 다르다.
> >  href(하이퍼링크)란 무엇인가.
> >  (e)=>{}는 무엇이가.