const container = document.querySelector(".container");

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        column.style.width = 500 / num + "px";
        column.style.height = 500 / num + "px";
        container.appendChild(column);

        function createRow(num) {
            for (let r = 0; r < num -1; r++) {
                let row = document.createElement("div");
                row.classList.add("row");
                row.style.width = 500 / num + "px";
                row.style.height = 500 / num + "px";
                container.appendChild(row);
            }
        }
        createRow(num);
    }

    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "green";
        setTimeout(() => {
            box.style.backgroundColor = "";
        }, 500)
        })
    })
};

createGrid(16);


const num = document.querySelector(".dimensions");
const newGrid = document.querySelector(".newGrid");

num.addEventListener("click", () => {
    let num = prompt("New grid size", "Enter a number");
    container.remove();

    function createGrid(num) {
        const container = document.createElement("div");
        container.classList.add("container");
        newGrid.appendChild(container);
        for (let i = 0; i < num; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            column.style.width = 500 / num + "px";
            column.style.height = 500 / num + "px";
            container.appendChild(column);
    
            function createRow(num) {
                for (let r = 0; r < num -1; r++) {
                    let row = document.createElement("div");
                    row.classList.add("row");
                    row.style.width = 500 / num + "px";
                    row.style.height = 500 / num + "px";
                    container.appendChild(row);
                }
            }
            createRow(num);
        }
        const boxes = document.querySelectorAll(".container > div");
        boxes.forEach(box => {
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "green";
                setTimeout(() => {
                    box.style.backgroundColor = "";
                }, 500)
            })
        });
    };
    
    createGrid(num);
})
