const nOfNodes = 20;
const nodeContainer = document.querySelector(".nodeContainer");

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const nodes = [];
for (let i = 1; i <= nOfNodes; i++) {
    nodes.push(new Node(i));
}

for (let i = 0; i < ~~(nOfNodes / 2); i++) {
    nodes[i].left = nodes[2 * i + 1];
    nodes[i].right = nodes[2 * i + 2];
}

for (let i = 0; i <= Math.log2(nOfNodes); i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.id = "row" + i;
    nodeContainer.appendChild(row);
}

let sum = 0;
let timer = 0;
const transverse = (xNode, depth) => {
    const drawNode = document.createElement("div");
    const row = document.getElementById("row" + depth);
    drawNode.classList.add("node");
    drawNode.id = xNode.value;
    drawNode.innerText = xNode.value;
    drawNode.style.width = (50 * Math.sqrt(1 / (depth + 3))) + "px";
    drawNode.style.height = (50 * Math.sqrt(1 / (depth + 3))) + "px";
    drawNode.style.fontSize = (30 * Math.sqrt(1 / (2 * depth + 1))) + "px";
    setTimeout(() => {
        drawNode.style.backgroundColor = "blue";
        setTimeout(() => {
            drawNode.style.backgroundColor = "green";
        }, 500);
    }, ++timer * 500);


    sum += depth;
    xNode.left && transverse(xNode.left, depth + 1);
    xNode.right && transverse(xNode.right, depth + 1);
    row.appendChild(drawNode);
};

transverse(nodes[0], 0);




const limit = Math.pow(2, ~~Math.log2(nOfNodes) + 1) - 1
console.log(limit)
for (let i = nOfNodes; i < limit; i++) {
    const drawNode = document.createElement("div");
    const row = document.getElementById("row" + ~~Math.log2(nOfNodes));

    drawNode.classList.add("node");
    drawNode.classList.add("fillerNode");
    drawNode.style.width = (50 * Math.sqrt(1 / (~~Math.log2(nOfNodes) + 3))) + "px";
    drawNode.style.height = (50 * Math.sqrt(1 / (~~Math.log2(nOfNodes) + 3))) + "px";
    row.appendChild(drawNode);
}
console.log(sum);
