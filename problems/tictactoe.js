/**To design a tic-tac-toe game 
 * grid x x x
        x x x
        x x x
*Two players need to mark 0 or 1 in positions
the first who grabs a row,col or dia wins
*/

//require prompt for user input
const PROMT = require("prompt-sync")();
//grid that resembles 9 boxes of X-O game
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

class Grid {
  printGrid() {
    for (let row = 0; row < grid.length; row++) {
      console.log("\t", grid[row].join(" "));
    }
  }
  updateGrid(pos, val) {
    const gridArr = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];
    grid[gridArr[pos - 1][0]][gridArr[pos - 1][1]] = val;
  }
  checkGrid(playerturn) {
    if (
      (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2]) ||
      (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) ||
      (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2]) ||
      (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) ||
      (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) ||
      (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2]) ||
      (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) ||
      (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])
    )
      return playerturn;
    else return "undermine state";
  }
}

const gameGrid = new Grid();

//Player class
class Player {
  input() {
    let positionVal = Number(PROMT("Enter Position value to insert:"));
    return positionVal;
  }
  checkPos(arr, val) {
    for (let index = 0; index < arr.length; index++) {
      if (val == arr[index]) {
        return true;
      }
    }
    return false;
  }
}

//Game function
function gameStarts() {
  let posAvail = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outState = "---INVALID POSTION ENTERED---";
  console.log("Welcome to tic-tac-toe game");
  gameGrid.printGrid();
  const player1 = new Player();
  const player2 = new Player();
  let state = "";
  for (let playCount = 0; playCount <= 3; playCount++) {
    let flag = true;
    while (flag) {
      console.log("PLAYER X TURN-->");
      let inputPlayer1 = player1.input();
      if (player1.checkPos(posAvail, inputPlayer1)) {
        posAvail = posAvail.filter((val) => val !== inputPlayer1);
        flag = false;
        gameGrid.updateGrid(inputPlayer1, "X");
        gameGrid.printGrid();
        state = gameGrid.checkGrid("X");
        if (state == "X") return "\t ---PLAYER X WINS---";
      } else {
        console.log(outState);
      }
    }
    flag = true;
    while (flag) {
      console.log("PLAYER O TURN-->");
      let inputPlayer2 = player2.input();
      if (player2.checkPos(posAvail, inputPlayer2)) {
        posAvail = posAvail.filter((val) => val !== inputPlayer2);
        flag = false;
        gameGrid.updateGrid(inputPlayer2, "O");
        gameGrid.printGrid();
        state = gameGrid.checkGrid("O"); //return "PLAYER O WINS";
        if (state == "O") return "\t ---PLAYER O WINS---";
      } else {
        console.log(outState);
      }
    }
  }
  return "---MATCH DRAWN---";
}
console.log(gameStarts());
