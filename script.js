let taskarea = document.querySelector(".taskarea")
let isdark = false;


function addtask() {

    // add task code below

    let btnadd = document.getElementById("addtask");
    btnadd.addEventListener("click", () => {

        let taskcontent = prompt("enter task you want to add: ");

        if (taskcontent) {
            let tasklist = document.createElement("ul");
            tasklist.className = "tasklist"

            let taskitem = document.createElement("li");
            taskitem.className = isdark ? "taskitem-dark" : "taskitem";

            // adding task completion styles
            taskitem.addEventListener("click", () => {
                taskitem.classList.toggle("taskcomp")
            })

            taskitem.textContent = taskcontent;

            tasklist.appendChild(taskitem);
            taskarea.appendChild(tasklist);
        }



    })

    // clear task code below

    let btnclear = document.getElementById("cleartask");
    btnclear.addEventListener("click", () => {

        taskarea.innerHTML = '';
    })


    // dark mode code below



    let btndark = document.getElementById("darkmode");
    btndark.textContent = "Dark Mode";
    btndark.addEventListener("click", () => {

        isdark = !isdark;

        // making text from dark mode to light mode
        if (isdark) {
            btndark.textContent = "Light Mode";
        } else {
            btndark.textContent = "Dark Mode";
        }

        console.log("dark mode: ", isdark, "button text: ", btndark.textContent);


        // making navbar dark
        let navdark = document.querySelector(".navbar");
        navdark.classList.toggle("navbar-dark")

        // making main title dark
        let darkpara = document.querySelector("#main-title");
        darkpara.classList.toggle("dark-para")

        // making hero section dark
        let darkhero = document.querySelector(".hero");
        darkhero.classList.toggle("hero-dark");

        // making container dark
        let darkcont = document.querySelector(".container");
        darkcont.classList.toggle("container-dark");

        // making buttons dark
        let darkbtn = document.querySelectorAll(".button");
        darkbtn.forEach(element => {
            element.classList.toggle("button-dark");
        });

        // making task area dark
        let darktaskarea = document.querySelector(".taskarea");
        darktaskarea.classList.toggle("taskarea-dark");

        // making task item dark
        let darktaskitem = document.querySelectorAll(".taskitem");
        darktaskitem.forEach(element => {
            element.classList.toggle("taskitem-dark");
        });

        // making footer dark
        let darkfooter = document.querySelector(".footer");
        darkfooter.classList.toggle("footer-dark");


        let itemdark = document.querySelectorAll(".taskitem , .taskitem-dark")
        itemdark.forEach(element => {
            if (isdark) {
                element.classList.add("taskitem-dark");
                element.classList.remove("taskitem");
            }
            else {
                element.classList.add("taskitem");
                element.classList.remove("taskitem-dark");
            }
        });
    })





}



addtask()