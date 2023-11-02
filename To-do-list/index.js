let addbutton = document.getElementById("addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay=document.getElementsByClassName("overlay")[0];

function openField()
{
fieldcontainer.style.display= "block";
}
function closeField(){
  fieldcontainer.style.display="none"
  
}
addbutton.onclick = openField;

overlay.onclick= closeField;


const data = [
  {
  title: 'todo',
  desc: 'this is a todo card',
  status: 'done',
  priority: 'High',
  },
  {
  title: 'todo',
  desc: 'this is a todo card',
  status: 'todo',
  priority: 'low',
  },
  {
  title: 'test',
  desc: 'this is a todo card',
  status: 'stuck',
  priority: 'medium',
  },
  {
  title: 'in progress',
  desc: 'this is a todo card',
  status: 'in progcess',
  priority: 'High',
  },
  {
  title: 'test-now',
  desc: 'this is a todo card',
  status: 'done',
  priority: 'High',
  },
  ];
  function render(data){
   const listcontainer=document.getElementsByClassName("listcontainer")[0];
  //  const done = []
   listcontainer.innerHTML=""
   for(let i=0 ; i < data.length ; i++){
    listcontainer.innerHTML += createCard(data[i]);
    
   }
  }
  function addCard(){
    const Mockdata={
      title:'',
      desc:'',
      status:'',
      priority:'',
    }
    Mockdata.title="hi";
    Mockdata.desc="description";
    Mockdata.status="in progress";
    Mockdata.priority="low";
    data.push(Mockdata);
    render(data)
  
  }
  function createCard(list){
    const { title, desc, priority } = list;
    return `<div class="list">
      <button class="btn"><i class="fa fa-check"></i></button>
    <div class="details">
      <h3>Todo</h3>
      <p>This is a todo card</p>
      <button>High</button>
    </div>
    <div class="icons">
      <button class="btn"><i class="fa fa-remove"></i></button>
      <button class="btn"><i class="fa fa-edit"></i></button>
    </div>
  </div>`
  }
  render(data)