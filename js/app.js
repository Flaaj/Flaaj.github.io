const gridRows = 40;
const gridColumns = 40;
const grid = document.getElementById("grid");
const distances = [];


let clicked = false;
document.addEventListener("mousedown", function (e) {
    // blokuje standardowy event dla wcisnięcia lewego przycisku - przeciąganie elementów
    e.preventDefault();
    clicked = true;
});
document.addEventListener("mouseup", function () {
    clicked = false;
});

const addElementToGrid = function (i, j) {
    const element = document.createElement("div");
    element.classList = ["el"];
    element.id = i + "x" + j;
    element.addEventListener("mouseover", function () {
        element.classList.add("el--animated");
        setTimeout(() => {
            element.classList.remove("el--animated");
        }, 1000);
    });

    element.addEventListener("mouseover", function () {
        if (clicked) {
            element.classList.toggle("el--wall");
            let [col, row] = element.id.split("x");
            distances[col][row] == 0
                ? (distances[col][row] = -1)
                : (distances[col][row] = 0);
        }
    });

    element.addEventListener("mousedown", function () {
        element.classList.toggle("el--wall");
        let [col, row] = element.id.split("x");
        distances[col][row] == 0
            ? (distances[col][row] = -1)
            : (distances[col][row] = 0);
    });

    grid.appendChild(element);
};

document.addEventListener("touchmove", function (e) {
    e.preventDefault();
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const [col, row] = element.id.split("x");
    element.classList.toggle("el--wall");
    distances[col][row] == 0
        ? (distances[col][row] = -1)
        : (distances[col][row] = 0);
});

const createGrid = () => {
    for (let i = 0; i < gridRows; i++) {
        distances.push([]);
        for (let j = 0; j < gridColumns; j++) {
            distances[i].push(0);
            addElementToGrid(i, j);
        }
    }
};

const solveLabirynth = () => {
    const dirs = [
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
    ];

    const visited = [[0, 0]];
    distances[0][0] = 1;
    while (visited.length > 0) {
        [x, y] = visited.shift();
        dirs.forEach(([dx, dy]) => {
            if (
                x + dx >= 0 &&
                x + dx < gridRows &&
                y + dy >= 0 &&
                y + dy < gridColumns &&
                distances[x + dx][y + dy] == 0
            ) {
                distances[x + dx][y + dy] = distances[x][y] + 1;
                visited.push([x + dx, y + dy]);
            }
        });
    }

    const path = [[gridRows - 1, gridColumns - 1]];
    if (distances[gridRows - 1][gridColumns - 1] > 0) {
        [x, y] = [gridRows - 1, gridColumns - 1];
        while (distances[x][y] > 1)
            dirs.forEach(([dx, dy]) => {
                if (
                    x + dx >= 0 &&
                    x + dx < gridRows &&
                    y + dy >= 0 &&
                    y + dy < gridColumns &&
                    distances[x + dx][y + dy] == distances[x][y] - 1
                ) {
                    path.push([x + dx, y + dy]);
                    [x, y] = [x + dx, y + dy];
                }
            });
    }
    path.push([0, 0]);


    let timerCounter = 0;
    path.reverse().forEach(([x, y]) => {
        let id = x + "x" + y;
        setTimeout(() => {
            document.getElementById(id).style.backgroundColor = "yellow";
        }, 25 * timerCounter++);
    });
};

const resetDistances = () => {
    for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridColumns; j++) {
            let idx = i + "x" + j;
            document.getElementById(idx).style.backgroundColor = "";
            if (distances[i][j] > 0) {
                distances[i][j] = 0;
            }
        }
    }
    path = [];
};

const clearWalls = () => {
    for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridColumns; j++) {
            if (distances[i][j] < 1) {
                distances[i][j] = 0;
                const wall = document.getElementById(i + "x" + j);
                wall.classList.remove("el--wall");
            }
        }
    }
    path = [];
};

createGrid();
document.getElementById("solveLab").onclick = solveLabirynth;
document.getElementById("resetDistances").onclick = resetDistances;
document.getElementById("clearWalls").onclick = clearWalls;
