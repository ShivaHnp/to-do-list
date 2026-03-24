const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskBox = document.querySelector(".task-container");
const taskSelect = document.querySelector(".form-select");

const addTask = () => {
    let category = taskSelect.value;
    let taskText = taskInput.value;
    if(taskText === ""){
        return
    }
    let taskHtml =`
    <div class="task-card d-flex align-items-center justify-content-between p-3 mb-3 rounded-4">
        <div class="d-flex align-items-center gap-3">
            <input type="checkbox" class="form-check-input">
            <div>
                <h6 class="mb-1">${taskText}</h6>
                <span class="badge text-danger">
                    ${category}
                </span>
            </div>
        </div>
        <div class="icons d-flex gap-3 align-items-center jsdelivr">
            <i class="bi bi-star"></i>
            <i class="bi bi-trash"></i>
        </div>
    </div>
    `
    taskBox.insertAdjacentHTML("beforeend", taskHtml);
    taskInput.value = "";

}
addBtn.addEventListener("click", addTask);


