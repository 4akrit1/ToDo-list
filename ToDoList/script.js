
function addtask() {
    const inputBox = document.getElementById("task");
    const list = document.getElementById("list-container");
    if (inputBox.value === "") {
      alert("Add your task first!!!");
    } else {
      const li = document.createElement("li");
      li.innerHTML = inputBox.value;
      list.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
      inputBox.value = "";
      saveData();
    }
  }

  document.getElementById("list-container").addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function deleteAllTasks() {
    const list = document.getElementById("list-container");
    list.innerHTML = "";
    localStorage.removeItem("data");
  }

function saveData(){
    const list = document.getElementById("list-container");
    localStorage.setItem("data",list.innerHTML);
}

function loadData(){
    const list = document.getElementById("list-container");
    if (localStorage.getItem("data")) {
        list.innerHTML = localStorage.getItem("data");
      }
}
loadData();