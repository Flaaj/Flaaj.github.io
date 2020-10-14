const updateCanvas = () => {
    checkForCollision(curShape, curPos);
    eliminateFullRows();
    clearCanvas();
    render();
    renderShape(curShape, curPos, curColor);
};

const rect = (x, y, color) => {
    const [width, height] = [40, 40];
    context.fillStyle = color ? color : "black";
    context.fillRect(1 + 42 * x, 1 + 42 * y, width, height);
};

const render = () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            if (container[i][j] === 1) rect(i, j);
        }
    }
};

const renderShape = (shape, pos, color) => {
    const [type, rot] = shape;
    shapes[type][rot].forEach((pixel) =>
        rect(pos[0] + pixel[0], pos[1] + pixel[1], color)
    );
};

const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
};

const generateNewShape = () => {
    curPos = [2 + random(3), 0];
    curShape = [random(shapes.length), random(4)];
    curColor = colors[random()];
};

const moveDown = () => curPos[1]++;
const moveRight = () => curPos[0]++;
const moveLeft = () => curPos[0]--;
const rotate = () => (curShape[1] = (curShape[1] + 1) % 4);

const checkForCollision = (shape, pos) => {
    const [type, rot] = shape;
    const posCloned = pos.slice();
    const pixels = shapes[type][rot].map((pixel) => [
        pos[0] + pixel[0],
        pos[1] + pixel[1],
    ]);

    pixels.forEach(([x, y]) => {
        if (x <= -1) pos[0] = posCloned[0] + 1;
        else if (x >= 10) pos[0] = posCloned[0] - 1;

        if (x <= -2) pos[0] = posCloned[0] + 2;
        else if (x >= 11) pos[0] = posCloned[0] - 2;

        if (y >= 20) {
            y = posCloned[1] - 1;
            generateNewShape();
            addShapeToContainer(pixels);
        }
        if (y >= 21) pos[1] = posCloned[1] - 2;
        if (container[x] && container[x][y] && container[x][y] > 0) {
            pos = posCloned;
            addShapeToContainer(pixels);
            generateNewShape();
        }
    });
};

const canItGoLeftEvenMore = () => {};

const canItGoRightEvenMore = () => {};

const canItGoDownEvenMore = () => {};

const addShapeToContainer = (pixels) => {
    pixels.forEach(([x, y]) => {
        container[x][y - 1] = 1;
    });
};

const eliminateFullRows = () => {
    for (let i = 0; i < 20; i++) {
        let j = 0;
        while (j < 10) {
            container[j][i] === 0 && (j = 11);
            j++
        }
        if (j == 10) {
            delRow(i);
        }
    }
};

const delRow = (n) => {
    for (let i = 0; i < 10; i++) {
        container[i] = [0, ...container[i].filter((_, i) => i != n)];
    }
};

const random = (n = colors.length) => ~~(Math.random() * n);
