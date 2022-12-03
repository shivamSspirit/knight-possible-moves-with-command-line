const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let position = "";

// question user to enter name
rl.question("Add position val characters\n", function (string) {
    position = string;
    let positionArr = Array.from(position)
    console.log('count of possible moves', findPossibleMoves(Number(positionArr[0]),Number(positionArr[1])))
    rl.close();
});

let n = 4;
let m = 4;

function findPossibleMoves(p, q) {
    let mat = [[1, 0, 1, 0],
    [0, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1]];

    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1];

    let count = 0;
    for (let i = 0; i < 8; i++) {
        let x = p + X[i];
        let y = q + Y[i];
        if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
            count++;
    }
    return count;
}

