const container = document.querySelector(".container") as HTMLElement;

const high = document.createElement("div");
high.classList.add("top");
container.appendChild(high);

let counter = 0;
const count = document.createElement("h1");
count.classList.add("count");
count.textContent = `Number of boxes: -- ${counter}`;
high.appendChild(count);

const boxes = document.createElement("div");
boxes.classList.add("boxes");
container.appendChild(boxes);

const createMore = document.createElement("button");
createMore.classList.add("more");
createMore.textContent = "Create More";
container.appendChild(createMore);

class MainPart {
    box: any;
    color: string;

    constructor(randomColor: string) {     
        this.box = document.createElement("div");
        this.box.classList.add("box");
        this.color = `${randomColor}`;
        this.box.style.backgroundColor = this.color;
        this.box.addEventListener("click", () => this.clicked(this.color));
        boxes.append(this.box);
    }

    clicked(color: string) {
        document.body.style.backgroundColor = color;

    }

    createContainer() {
        boxes.appendChild(this.box);
    }
}

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBoxes() {
    for (let i = 0; i < 8; i++) {
        const card = new MainPart(randomColor());
        card.createContainer();
        counter++;
        count.textContent = `Number of boxes: -- ${counter}`;
    }
}

createMore.addEventListener("click", createBoxes);
