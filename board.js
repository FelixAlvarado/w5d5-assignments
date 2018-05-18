class Board {
  constructor(grid = [[null,null,null],[null,null,null],[null,null,null]]) {
    this.grid = grid;
  }
  
  display() {
    this.grid.forEach( row => console.log(row));
  }
  
  isValidMove(row,col) {
     return !this.grid[row][col];
  }
  
  placeMark() {
    
  }
}

const board = new Board();
board.display();
