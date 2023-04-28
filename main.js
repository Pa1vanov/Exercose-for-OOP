var container = document.querySelector(".container");
var high = document.createElement("div");
high.classList.add("top");
container.appendChild(high);
var counter = 0;
var count = document.createElement("h1");
count.classList.add("count");
count.textContent = "Number of boxes: -- ".concat(counter);
high.appendChild(count);
var boxes = document.createElement("div");
boxes.classList.add("boxes");
container.appendChild(boxes);
var createMore = document.createElement("button");
createMore.classList.add("more");
createMore.textContent = "Create More";
container.appendChild(createMore);
var MainPart = /** @class */ (function () {
    function MainPart(randomColor) {
        var _this = this;
        this.box = document.createElement("div");
        this.box.classList.add("box");
        this.color = "".concat(randomColor);
        this.box.style.backgroundColor = this.color;
        this.box.addEventListener("click", function () { return _this.clicked(_this.color); });
        boxes.append(this.box);
    }
    MainPart.prototype.clicked = function (color) {
        document.body.style.backgroundColor = color;
    };
    MainPart.prototype.createContainer = function () {
        boxes.appendChild(this.box);
    };
    return MainPart;
}());
function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createBoxes() {
    for (var i = 0; i < 8; i++) {
        var card = new MainPart(randomColor());
        card.createContainer();
        counter++;
        count.textContent = "Number of boxes: -- ".concat(counter);
    }
}
createMore.addEventListener("click", createBoxes);
