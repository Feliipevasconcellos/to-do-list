const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
  saveThemePreference();
});

function saveThemePreference() {
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
}

function loadThemePreference() {
  const savedtheme = localStorage.getItem("theme");

  if (savedtheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = false;
  }
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${task.text}</span>
        <button class="delete-btn">&times;</button>
    `;
  if (task.complete) {
    li.classList.add("complete");
  }

  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("complete");
    saveTasks();
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.classList.add("deleting");
    li.addEventListener(
      "animationend",
      () => {
        li.remove();
        saveTasks();
      },
      { once: true }
    );
  });
  return li;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Plese write a task.");
    return;
  }

  const newTask = {
    text: taskText,
    completed: false,
  };

  const taskElement = createTaskElement(newTask);
  taskList.appendChild(taskElement);
  taskInput.value = "";
  saveTasks();
}

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
