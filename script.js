createGrid(16);
function createGrid(num) {
    const container = document.querySelector(".container");
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
        box.style.backgroundColor = btnColor.value;
        // setTimeout(() => {
        //     box.style.backgroundColor = "";
        // }, 500)
        })
    })
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const btnNum = document.querySelector(".dimensions");
const heading = document.querySelector("h1");

btnNum.addEventListener("click", () => {
    let num = prompt("New grid size", "Enter a number");
    Number.num;
    if (num > 100) {
        num = prompt("Number too big. Only 1-100");
    } else if (num == null || num == "") {
        return;
    } else if (isNaN(num)) {
        prompt("Enter a valid number between 1 - 100");
        return;
    }
    document.querySelector(".container").remove();

    function createGrid(num) {
        const newGrid = document.querySelector(".newGrid");
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
                box.style.backgroundColor = getRandomColor();
            })
        });
    };
    createGrid(num);
});


const btnColor = document.querySelector("input");
btnColor.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = btnColor.value;
        })
    })
});

const random = document.querySelector(".random");
random.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = getRandomColor();
        })
    })
})