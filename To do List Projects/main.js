
const add_btn=document.querySelector(".add-task");
let   task_input=document.querySelector("#task");
const error_message=document.querySelector("#error");
const count_value=document.querySelector("#count-value");
const task_container=document.querySelector(".tasks");

let taskCount=0;

 function displayCount()
 {
  if(taskCount!=null){
    
  count_value.innerHTML=taskCount;
}
}

 function addtask()
{
    const taskName=task_input.value.trim();
    error_message.style.display="none";
    if(!taskName)
    {
        setTimeout(() => {
            
            error_message.style.display="block";
        }, 200);
        return;
    }

      let task=`<div class="New-task"> 
      <input type="checkbox" class="task-check">
      <span class="taskName">${task_input.value}</span>
      <button class="Edit-button">
      <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="Delete-button">
      <i class="fa-solid fa-trash fa-shake"></i>
      </button>
      </div>`;

    
    task_container.insertAdjacentHTML("beforeend",task);
   
    const deleteButton=document.querySelectorAll(".Delete-button");
    
    deleteButton.forEach(button=>{
    button.onclick=()=>{
    const chBtn=button.parentNode.querySelector(".task-check");
   if(!chBtn.checked){
    taskCount--;}
    button.parentNode.remove();
    displayCount(taskCount);
   // storeTask();
  };

    });

    const editButton = document.querySelectorAll(".Edit-button");
    editButton.forEach((btn) => {
    btn.onclick = (e) => {
    const taskElement = btn.parentNode.querySelector(".taskName");
    task_input.value = taskElement.textContent; 
    btn.parentNode.remove();
    taskCount--;
    displayCount();
  //  storeTask();
  };
});


   const taskCheck=document.querySelectorAll(".task-check");
   taskCheck.forEach(checkBx=>{

   checkBx.onchange=()=>{

   checkBx.nextElementSibling.classList.toggle("completed");
   if(checkBx.checked)
   {

     taskCount-=1;
    
     const editBtn= checkBx.parentNode.querySelector(".Edit-button");
     editBtn.disabled = true;

   }
   else
   {
     taskCount+=1;
   }
   displayCount(); 
  // storeTask();
  };

    
});
 
    taskCount++;
    displayCount();
    task_input.value="";
  //  storeTask();
}
 
add_btn.addEventListener("click",addtask);
const Setting=document.querySelector(".Settings");
Setting.onclick=()=>{

  document.body.classList.toggle("Green-theme");
}






//const a=document.querySelector(".New-task");

/*function storeTask()
{
  localStorage.setItem("data",task_container.innerHTML);
}
function getTask()  
{
  task_container.innerHTML=localStorage.getItem("data");
}
getTask();*/