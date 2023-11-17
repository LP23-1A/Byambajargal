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
  statusM.value = "";
  priorityM.value = "";
}
overlay.onclick = closeField;

let data = [];

function render(data) {
  let count = {
    todo: 0,
    inprogress: 0,
    stuck: 0,
    done: 0,
  };

  const listcontainer = document.getElementsByClassName("listcontainer");

  listcontainer[0].innerHTML = "";
  listcontainer[1].innerHTML = "";
  listcontainer[2].innerHTML = "";
  listcontainer[3].innerHTML = "";

  data.forEach((element) => {
    if (element.status === "todo") {
      listcontainer[0].innerHTML += createCard(element);
      count.todo += 1;
    }
    if (element.status === "in-progress") {
      listcontainer[1].innerHTML += createCard(element);
      count.inprogress += 1;
    }
    if (element.status === "stuck") {
      listcontainer[2].innerHTML += createCard(element);
      count.stuck += 1;
    }
    if (element.status === "done") {
      listcontainer[3].innerHTML += createCard(element);
      count.done += 1;
    }
  });
  let counter = document.querySelectorAll(".counter");

  counter[0].innerHTML = count.todo;
  counter[1].innerHTML = count.inprogress;
  counter[2].innerHTML = count.stuck;
  counter[3].innerHTML = count.done;

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
    };
  });

  dragAndDrop();
}
function addCard(action, element) {
  if (action === "edit") {
    const editId = element.id;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == editId) {
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
  todoname.value = "";
  description.value = "";
  priorityM.value = "";
  statusM.value = "";
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
  let count = {
    todo: 0,
    inprogress: 0,
    stuck: 0,
    done: 0,
  };
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

  card.forEach((card) => {
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
      // console.log(event);
      let id = draggedItem.getAttribute("data-id");
      data.map((el) => {
        if (el.id == id) {
          if (event.currentTarget.id === "todo") {
            el.status = "todo";
            count.todo += 1;
          }
          if (event.currentTarget.id === "inprogress") {
            el.status = "in-progress";
            count.inprogress += 1;
          }
          if (event.currentTarget.id === "stuck") {
            el.status = "stuck";
            count.stuck += 1;
          }
          if (event.currentTarget.id === "done") {
            el.status = "done";
            count.done += 1;
          }
        }
        render(data);
      });
    });
  });
}
