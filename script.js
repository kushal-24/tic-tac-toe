const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const congo = document.querySelector(".congo");
const newGame = document.querySelector(".refresh");
let sign = "cross";

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Event listener for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (sign === "cross") {
            sign = "zero";
            box.innerText = "X";
            box.classList.add("cross");
        } else {
            sign = "cross";
            box.innerText = "O";
            box.classList.add("zero");
        }
        box.disabled = true;
        checkWinner();
    });
});

// Display winner
const showWinner = (winner) => {
    congo.innerHTML = `<h3>Congratulations! Winner is ${winner}</h3>`;
    congo.style.display = "block";
    disableBoxes();
};

// Disable all boxes after a win
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable all boxes for a new game
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("cross", "zero");
    });
};

// Check for winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const val1 = boxes[a].innerText;
        const val2 = boxes[b].innerText;
        const val3 = boxes[c].innerText;

        if (val1 !== "" && val1 === val2 && val1 === val3) {
            boxes[a].style.backgroundColor = "lightgreen";
            boxes[b].style.backgroundColor = "lightgreen";
            boxes[c].style.backgroundColor = "lightgreen";
            showWinner(val1);
            return;
        }
    }

    // Check for a draw
    const isDraw = [...boxes].every((box) => box.innerText !== "");
    if (isDraw) {
        congo.innerHTML = `<h3>It's a Draw!</h3>`;
        congo.style.display = "block";
    }
};

// Reset the game
reset.addEventListener("click", () => {
    enableBoxes();
    sign = "cross";
    congo.innerHTML = "";
    congo.style.display = "none";
    boxes.forEach((box) => (box.style.backgroundColor = ""));
});

// New game button
newGame.addEventListener("click", () => {
    enableBoxes();
    sign = "cross";
    congo.innerHTML = "";
    congo.style.display = "none";
    boxes.forEach((box) => (box.style.backgroundColor = ""));
});
