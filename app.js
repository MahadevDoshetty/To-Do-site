console.log("Welcome to Dev's Dev Tools");
const saveBtn = document.querySelector('#save');
const tasksDiv = document.querySelector(".tasks");
const input = document.getElementById('taskName');
saveBtn.addEventListener('click', function () {
    const tName = document.getElementById('taskName');
    console.log(tName.value);
    const taskDiv = document.createElement('div');
    const para = document.createElement("p");
    const deleteBtn = document.createElement('button');
    deleteBtn.type = "reset";
    deleteBtn.id = "dBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        tasksDiv.removeChild(taskDiv);
    })
    taskDiv.className = "task1";
    para.style.flex = "1";
    deleteBtn.style.flex = "0 0 auto";
    para.textContent = tName.value;
    taskDiv.style.borderRadius = "1rem";
    para.style.borderRadius = "1rem";
    taskDiv.style.display = "flex";
    taskDiv.style.gap = "1rem";
    taskDiv.style.margin = "0.5rem";
    deleteBtn.style.padding = "1.3rem";
    para.style.padding = "1rem";
    taskDiv.appendChild(para);
    taskDiv.appendChild(deleteBtn);
    tasksDiv.appendChild(taskDiv);
});
