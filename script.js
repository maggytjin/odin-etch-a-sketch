const container = document.querySelector(".container");

function createColumn(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.classList.add("column");
        div.style.width = 500 / num + "px";
        div.style.height = 500 / num + "px";
        container.appendChild(div);

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
};

createColumn(16);