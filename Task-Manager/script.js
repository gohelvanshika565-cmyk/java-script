// Task 1
// Title: Study JavaScript
// Description: Complete Object & Array topic
// Due Date: 20-07-2026
// Priority: High

// Task 2
// Title: Complete Task Manager
// Description: Finish Add Task feature
// Due Date: 18-07-2026
// Priority: Medium

// Task 3
// Title: Exercise
// Description: 30 minutes workout
// Due Date: 17-07-2026
// Priority: Low

// Task 4
// Title: Buy Groceries
// Description: Milk, Bread, Eggs
// Due Date: 19-07-2026
// Priority: Medium

// Task 5
// Title: Revise HTML & CSS
// Description: Practice Flexbox & Grid
// Due Date: 21-07-2026
// Priority: High


let form = document.getElementById('form');

let title = document.getElementById('title');
let description = document.getElementById('description');
let date = document.getElementById('date');

let priority = document.getElementById('priority');
priority.addEventListener("change", displayTask);

let addBtn = document.getElementById('addBtn');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = -1;

let taskContainer = document.getElementById('taskContainer');

displayTask();

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    let taskTitle = title.value;
    let taskDes = description.value;
    let taskDate = date.value;
    let taskPriority = priority.value;
    
    if(taskTitle == "" || taskDes == "" || taskDate == ""){
        alert("Please Fill All Fields");
        return;
    }
    let task = {
        taskTitle,
        taskDes,
        taskDate,
        taskPriority
    }
    
    if(editIndex == -1){
        tasks.push(task); 
        alert("Task Added Successfully")
    }
    else{
        tasks[editIndex] = task;
        editIndex = -1;
        addBtn.innerHTML = "ADD"
        alert("Task Updated Successfully");
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));

    console.log(tasks);

    displayTask();

    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "Low";
});

function displayTask(){

    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {

        let div = document.createElement("div");
        div.classList.add("task-card");

        if(task.taskPriority == "High"){
            div.style.borderLeft = "8px solid red";
        }
        else if(task.taskPriority == "Medium"){
            div.style.borderLeft = "8px solid orange";
        }
        else{
            div.style.borderLeft = "8px solid green";
        }

        div.innerHTML = `
        <h3>${task.taskTitle}</h3>
        <p><b>Description:</b> ${task.taskDes}</p>
        <p>📅 ${task.taskDate}</p>
        <p>⚡ ${task.taskPriority}</p>
        <button onclick="editT(${index})">✏️ EDIT</button>
        <button onclick="deleteT(${index})">🗑 DELETE</button>`;
        
        taskContainer.append(div);
    });
}

function editT(index){
    editIndex = index;

    addBtn.innerHTML = "UPDATE";

    title.value = tasks[index].taskTitle;
    description.value = tasks[index].taskDes;
    date.value = tasks[index].taskDate;
    priority.value = tasks[index].taskPriority;
}

function deleteT(index){

    if (confirm("Delete this task?")){
        tasks.splice(index, 1);
        localStorage.setItem("tasks",JSON.stringify(tasks));

        editIndex = -1;
        addBtn.innerHTML = "ADD";

        title.value = "";
        description.value = "";
        date.value = "";
        priority.value = "Low";

        displayTask();
        
    }

}