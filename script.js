const inputBox = document.getElementById("input-box");
const inputContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("Must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    inputContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData(); // Save data after adding a task
}

inputContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", inputContainer.innerHTML); // Corrected method to set localStorage data
}

function showTasks() {
  inputContainer.innerHTML = localStorage.getItem("data"); // Corrected method to retrieve localStorage data
}

showTasks();
