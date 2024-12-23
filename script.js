let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let congo = document.querySelector(".congo");
let newgame = document.querySelector(".refresh");
let sign = "cross";

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        console.log("The box was clicked")
        if (sign === "cross") {
            sign = "zero";
            boxes.innerText = "X";
            boxes.style.fontSize = "70px";
            boxes.style.color = "#006494"
        }
        else {
            sign = "cross";
            boxes.innerText = "0";
            boxes.style.fontSize = "70px";
            boxes.style.color = "#E8F1F2";
            boxes.style.backgroundColor = "#006494";

        }
        boxes.disabled = true;
        checkwinner();
    })
});
const winnershow = (winner) => {
    congo.style.remove("hide");
    disablebutton();
}


const disablebutton = () => {
    boxes.forEach((boxes) => {
        boxes.disabled = true;
        boxes.style.backgroundColor="white";

    });
}
const enablebutton = () => {
    boxes.forEach((boxes) => {
        boxes.disabled = false;
    });
}

//winner
const checkwinner = () => {//patern naam ka ek array ban raha hai, go refer "arraydisplay.js" file
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos1Val === pos3Val) {
                let ann = congo.innerHTML = `<h3>Congratulations, Winner is ${pos1Val}</h3>`;
                console.log(`Winner is ${pos1Val}`);
                winnershow(pos2Val);
            }
        }
    }
};



//reset button
const resetbtn = () => {
    enablebutton();
    sign = "cross";
    for (box of boxes) {
        box.innerText = "";
    }
    congo.innerText = "";
}
reset.addEventListener("click", () => {
    resetbtn();
})


//newgame button
const newgamebtn = () => {
    enablebutton();
    sign = "cross";
    for (box of boxes) {
        box.innerText = "";
    }
    congo.innerText = "";
}
newgame.addEventListener("click", () => {
    newgamebtn();
})

