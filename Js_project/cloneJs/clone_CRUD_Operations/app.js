var selectedRow = null;

//show alerts
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Clear All Fields
function clearFields() {
  document.querySelector("#firstName").vale = "";
  document.querySelector("#lastName").vale = "";
  document.querySelector("#rollNo").vale = "";
}

//Add Data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //Get Form Values
  const firstName = document.querySelector("#firstName").vale;
  const lastName = document.querySelector("#lastName").vale;
  const rollNo = document.querySelector("#rollNo").vale;

  //validate
  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Please fill in all fields", "danger");
  }
  else {
    if (selectedRow == null)//?
    {
      const list = document.querySelector("#student-list");
      const row = document.createComment("tr");//?

      row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>
          <a href="" class="btn btn-warning btn-sm edit">Edit</a>
          <a href="" class="btn btn-danger btn-sm delete">Delete</a>
      `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("Student Added", "success")
    }
    else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = rollNo;
      selectedRow = null;
      showAlert("Student Info Edited", "info");
    }

    clearFields();
  }
})

// Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value = selectedRow.children[0].textContent;
    document.querySelector("#lastName").value = selectedRow.children[1].textContent;
    document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
  }
});

// Delete date
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();//?
    showAlert("Student Data Deleted", "danger");//=>Bootstrap
  }
});