// Todo List Spinner Load Script
document.querySelector(".nav-todo").addEventListener("click", async function(e) {
             e.preventDefault();
            document.querySelector("#spinner").classList.remove("d-none");
            await new Promise(resolve => setTimeout(resolve, 500));
            window.location.href = "./todo-List.html";
        });