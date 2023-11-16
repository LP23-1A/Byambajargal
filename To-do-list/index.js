let addbutton = document.querySelectorAll("#addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let todoname = document.getElementById("todoname");
let description = document.getElementById("description");
let statusM = document.getElementById("status");
let priorityM = document.getElementById("priorityM");
let counter = document.querySelectorAll("#counter");
let list = document.querySelectorAll("#list");
let addTask = document.querySelector(".endbutton");
let draggedItem = null;

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
  todoname.value = "";
  description.value = "";
}
overlay.onclick = closeField;

let data = [];

function render(data) {
  const listcontainer = document.getElementsByClassName("listcontainer");

  listcontainer[0].innerHTML = "";
  listcontainer[1].innerHTML = "";
  listcontainer[2].innerHTML = "";
  listcontainer[3].innerHTML = "";

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
      todoname.value = "";
      description.value = "";
      priorityM.value = "";
      statusM.value = "";
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
    todoname.value = "";
    description.value = "";
    priorityM.value = "";
    statusM.value = "";
    closeField();
    addTask.onclick = function () {
      addCard("add");
      // plusCount();
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
  dragAndDrop();
  closeField();
}

function createCard(list) {
  const { id, title, desc, priority } = list;
  return `
  <div class="drag" draggable="true" id="test" data-id="${id}" >
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
  plusCount();
};
function moveCard(element) {
  const moveId = element.id;
  for (a = 0; a < data.length; a++) {
    if (data[a].id === moveId) {
      data[a].status = "done";
    }
    render(data);
  }
  return;
}
function dragAndDrop() {
  let drag = document.querySelectorAll(".drag");
  let card = document.querySelectorAll(".card");
  drag.forEach((drag) => {
    drag.addEventListener("dragstart", (event) => {
      draggedItem = event.target;
      event.dataTransfer.setData("text", event.target.getAttribute("data-id"));
    });
    drag.addEventListener("dragend", () => {
      draggedItem = null;
    });
  });
  card.forEach((card, index) => {
    console.log(index);
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (draggedItem) {
        const draggingBoard = draggedItem.parentNode;
        if (draggingBoard !== event.currentTarget) {
          event.currentTarget
            .querySelector(".listcontainer")
            .appendChild(draggedItem);
        }
      }
    });
    card.addEventListener("dragleave", () => {});
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      let id = draggedItem.getAttribute("data-id");
      data.map((el) => {
        if (el.id == id) {
          if (event.currentTarget.id === "todo") {
            el.status = "todo";
            console.log(event.currentTarget.id);
          }
          if (event.currentTarget.id === "inprogress") {
            el.status = "in-progress";
          }
          if (event.currentTarget.id === "stuck") {
            el.status = "stuck";
          }
          if (event.currentTarget.id === "done") {
            el.status = "done";
          }
        }
      });
    });
  });
}
let count = {
  todo:0,
  inprogress:0,
  stuck:0,
  done:0
}

