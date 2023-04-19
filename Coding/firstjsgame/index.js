const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

//Game Loop
function drawGame() {
    clearScreen();
    DrawGreenBlob();
}

function drawGreenBlob(){

}

function clearScreen() {
    ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

}

drawGame();