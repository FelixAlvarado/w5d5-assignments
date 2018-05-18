
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(towers = [[3,2,1],[],[]]) {
      this.towers = towers;
      
  }
   promptMove () {
     console.log(this.towers);
     reader.question('Put your next move: ', (move) => {
       move = move.split(' ').map((el) => parseInt(el) );
       this.move(move[0], move[1]);
       if (this.isWon()) {
         console.log("Game Over!");
         reader.close();
       }else {
         this.run();
       }
     });
  }
  
  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];
    
    if (startTower.length === 0) return false;
    if (startTower[startTower.length - 1] > endTower[endTower.length - 1]) return false;
    return true;
  }
  
  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let startTower = this.towers[startTowerIdx];
      let endTower = this.towers[endTowerIdx];
      endTower.push(startTower.pop());
      return true;
    } else {
      return false;
    }
  }
  
  isWon() {
    return (this.towers[0].length === 0 && (this.towers[1].length === 3 || this.towers[2].length === 3));
  }
  
  
  print() {
    console.log(JSON.stringify(this.towers));
  }
  
  run() {
  
      this.promptMove();
    
  }
  
}

const game = new Game();
game.run();