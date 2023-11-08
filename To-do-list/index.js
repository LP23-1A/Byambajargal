let addbutton = document.querySelectorAll("#addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let todoname = document.getElementById("todoname");
let description = document.getElementById("description");
let statusM = document.getElementById("status");
let priorityM = document.getElementById("priorityM");
let counter = document.querySelectorAll("#counter");
let list = document.querySelectorAll("#list");
let drag = document.getElementsByClassName("drag");
let addTask = document.querySelector(".endbutton");
let listcontainer = document.querySelectorAll("#listcontainer");

for (drag of drag) {
  drag.addEventListener("dragstart", function (e) {
    let selected = e.target;
  });
  listcontainer.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  listcontainer.addEventListener("drop", function (e) {
    listcontainer.appenChild(selected);
    selected = null;
  });
}

function randomNumberGanerate() {
  return String(Math.random(1));
}

function openField() {
  fieldcontainer.style.display = "block";
}
function closeField() {
  fieldcontainer.style.display = "none";
}

for (let i = 0; i < addbutton.length; i++) {
  addbutton[i].onclick = openField;
}
counter = 0;
overlay.onclick = closeField;

let data = [];

function render(data) {
  const listcontainer = document.getElementsByClassName("listcontainer");

  listcontainer[0].innerHTML = "";
  listcontainer[1].innerHTML = "";
  listcontainer[2].innerHTML = "";
  listcontainer[3].innerHTML = "";
  let counter = 0;
  data.forEach((element) => {
    if (element.status === "todo") {
      listcontainer[0].innerHTML += createCard(element);
    }
    if (element.status === "in-progress") {
      listcontainer[1].innerHTML += createCard(element);
    }
    if (element.status === "stuck") {
      listcontainer[2].innerHTML += createCard(element);
    }
    if (element.status === "done") {
      listcontainer[3].innerHTML += createCard(element);
    }
    counter = counter + 1;
  });

  let removeBtn = document.querySelectorAll(".remove");

  removeBtn.forEach((element) => {
    element.onclick = function () {
      deleteItem(element);
    };
  });

  let edit = document.querySelectorAll(".edit");
  edit.forEach((element) => {
    element.onclick = function () {
      openField();
      editItem(element);
    };
  });

  let checkbtn = document.querySelectorAll(".check");
  checkbtn.forEach((element) => {
    element.onclick = function () {
      moveCard(element);
      console.log(data);
    };
  });
}
function addCard(action, element) {
  console.log(action);
  if (action === "edit") {
    const editId = element.id;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == editId) {
        console.log(editId, element.id);
        console.log(description.value);
        data[i].title = todoname.value;
        data[i].desc = description.value;
        data[i].status = statusM.value;
        data[i].priority = priorityM.value;
      }
    }
    render(data);
    closeField();
    addTask.onclick = function () {
      addCard("add");
    };
    return;
  }

  const Mockdata = {
    id: "",
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  Mockdata.id = randomNumberGanerate();
  Mockdata.title = todoname.value;
  Mockdata.desc = description.value;
  Mockdata.status = statusM.value;
  Mockdata.priority = priorityM.value;

  data.push(Mockdata);
  render(data);
  closeField();
}

// let id = Math.random();

function createCard(list) {
  const { id, title, desc, priority } = list;
  return `
  <div class="drag" draggable="true">
    <div class="list">
       <button class="check" id= "${id}"><i class="fa fa-check"></i></button>
      <div class="details">
        <h3>${title}</h3>
        <p>${desc} </p>
        <button class="button">${priority}</button>
      </div>
      <div class="icons">
        <button class="remove" id="${id}"><i class="fa fa-remove"></i></button>
        <button class="edit" id="${id}"  ><i class="fa fa-edit"></i></button>
      </div>
    </div>
  </div>
  `;
}

function deleteItem(element) {
  const findId = element.id;
  const newArr = data.filter((el) => {
    console.log(el.id, findId);
    return el.id !== findId;
  });

  data = newArr;
  render(data);
}

function editItem(element) {
  addTask.onclick = function () {
    addCard("edit", element);
  };
}

addTask.onclick = function () {
  addCard("add");
};
function moveCard(element) {
  const moveId = element.id;
  console.log(element.id, moveId);
  for (a = 0; a < data.length; a++) {
    if (data[a].id === moveId) {
      data[a].status = "done";
    }
    render(data);
  }
  return;
}
