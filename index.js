function newItem() {
  if (document.querySelector(".addnewtask").value.length == 0) {
    alert("Please enter a task");
  } else {
    const ul = document.querySelector(".list");
    const li = document.createElement("li");
    const text = document.createTextNode(
      document.querySelector(".addnewtask").value
    );

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("checkbox");

    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete");
    deleteTask.innerHTML = `
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-trash"
                    >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                    </svg>
        `;
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(deleteTask);
    ul.appendChild(li);

    const current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    const checkbox = document.querySelectorAll(".checkbox");
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].onclick = function () {
        this.parentElement.classList.toggle("completed");
      };
    }
    document.querySelector(".addnewtask").value = "";
  }
}

document.querySelector(".addTask").onclick = function () {
  newItem();
};

document
  .querySelector(".addnewtask")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      newItem();
    }
  });