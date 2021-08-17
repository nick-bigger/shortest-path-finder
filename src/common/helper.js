function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export function delay(time){
  return new Promise((resolve) => setTimeout(resolve, time))
}


/**
 * Sets given value to a cell and call setGrid.
 * @param {number[][]} grid - The grid of cells.
 * @param {function} setGrid - The function for setting the grid.
 * @param {number} x - The x coord of the cell to set.
 * @param {number} y - The y coord of the cell to set.
 * @param {number} value - The value of this cell, used for displaying
 *                         walls, entry, exit, and other cells as
 *                         different colors.
 * @param {{x: number, y: number}} entry - The Entry coords.
 */
export function setGridCell(grid, setGrid, x, y, value, entry) {
  const newGrid = [...grid]; // though its an array of array, shallow copy should work fine
  if (!(x === entry.x && y === entry.y)) {
    newGrid[x][y] = value; // set the value to the specific cell
  }
  setGrid(newGrid);
}

/**
 * Sets an array of cells to a particular value.
 * @param {number[][]} grid - The grid of cells.
 * @param {function} setGrid - The function for setting the grid.
 * @param {{x: number, y: number}[]} positions - Array of {x, y} coordinates
 * @param {number} value - The value of this cell, used for displaying
 *                         walls, entry, exit, and other cells as
 *                         different colors.
 * @param {{x: number, y: number}} entry - The Entry coords.
 */
export function setGridCells(grid, setGrid, positions, value, entry) {
  const newGrid = [...grid];
  positions.forEach((position) => {
    if (!(position.x === entry.x && position.y === entry.y)) {
      // check if position is not same as entry
      newGrid[position.x][position.y] = value; // set value of cell
    }
  });
  setGrid(newGrid);
}

/**
 * Generates a rows X cols array filled with value.
 * @param {number} rows - The number of rows.
 * @param {number} cols - The number of cols.
 * @param {number} value - The value to fill the array with, used
 *                         for displaying walls, entry, exit, and
 *                         other cells as different colors.
 * @returns {number[][]} A rows X cols array filled with value.
 */
export function generateGrid(rows, cols, value) {
  return Array.from(new Array(rows), () => new Array(cols).fill(value));
}

/**
 * Generates a rows X cols array with random entry and exit cells
 * and walls.
 * @param {number} rows - The number of rows.
 * @param {number} cols - The number of cols.
 * @returns {number[][]} A rows X cols array with a randomly placed
 *                       entry and exit cell and walls.
 */
export function randomMazeGenerator(rows, cols) {
  const grid = generateGrid(rows, cols, 0);

  grid.forEach((row) => {
    row.forEach((_, pos) => {
      if (Math.random() < 0.25) {
        row[pos] = 1;
      }
    });
  });

  const entry = { x: getRandom(rows), y: getRandom(cols) };
  const exit = {x: -1, y: -1};
  do{
    exit.x = getRandom(rows);
    exit.y = getRandom(cols);
  }while(exit.x === entry.x && exit.y === entry.y);

  grid[entry.x][entry.y] = 2;
  grid[exit.x][exit.y] = 3;
  return [grid, entry, exit];
}
