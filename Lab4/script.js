let el9 = document.getElementById("el9");

let el11 = document.querySelector("#el11");

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

el9.addEventListener("click", () => {
    el9.style.backgroundColor = randomColor();
    el9.style.color = randomColor();
});

el11.addEventListener("click", () => {
    let element = document.querySelector("#el11");
    element.style.backgroundColor = randomColor();
    element.style.color = randomColor();
});

let imgBlock = document.getElementById("image-block");

document.getElementById("addImg").onclick = () => {
    if (!document.getElementById("cityImg")) {
        let newImg = document.createElement("img");
        newImg.id = "cityImg";
        newImg.src = "berlin.jpg";
        newImg.width = 400;
        imgBlock.appendChild(newImg);
    }
};

document.getElementById("increaseImg").onclick = () => {
    let img = document.getElementById("cityImg");
    if (img) img.width += 20;
};

document.getElementById("decreaseImg").onclick = () => {
    let img = document.getElementById("cityImg");
    if (img && img.width > 50) img.width -= 20;
};

document.getElementById("removeImg").onclick = () => {
    let img = document.getElementById("cityImg");
    if (img) img.remove();
};
