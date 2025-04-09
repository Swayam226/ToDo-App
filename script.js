

function addtask() {
    let taskarea = document.querySelector(".taskarea")
    let btn = document.getElementById("new");
    btn.addEventListener("click", () => {

        let taskcontent = prompt("enter task you want to add: ");

        if (taskcontent) {
            let tasklist = document.createElement("ul");
            tasklist.className = "tasklist"
            let taskitem = document.createElement("li");

            // adding task completion styles
            taskitem.addEventListener("click", () => {
                tasklist.classList.toggle("taskcomp")
            })

            taskitem.textContent = taskcontent;

            tasklist.appendChild(taskitem);
            taskarea.appendChild(tasklist);
        }



    })
}

addtask()