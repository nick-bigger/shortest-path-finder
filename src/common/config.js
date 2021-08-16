// Settings for UI configuration

// colors
export const cellColor = "white";
export const wallColor = "red";
export const entryColor = "blue";
export const exitColor = "green";
export const searchColor = "lightgrey";
export const pathColor = "yellow";

// Maximum Dimensions
export const minRows = 5;
export const minColumns = 5;

// Maximum Dimensions - web
export const maxRows = 35;
export const maxColumns = 70;

// Maximum Dimensions - mobile
const maxRowsMobile = 30;
const maxColumnsMobile = 25;

// box size
export const cellWidth = 25;
export const cellGap = 2;


// Global settings for app (modify below, iff you know what you are doing)

// An empty cell in the Grid - can pass through
export const cellType = 0;
// A Wall cell - cannot pass through
export const wallType = 1;
// The Entry cell, where to start Path
export const entryType = 2;
// The Exit cell, where to finish Path
export const exitType = 3;
// A cell that is currently being Searched
export const searchType = 4;
// A Path Cell, used when displaying the solution
export const pathType = 5;
// The Current Cell the algorithm is processing
export const currentType = 6;

export const clickTypeToColorMap = new Map([
  [cellType, cellColor],
  [wallType, wallColor],
  [entryType, entryColor],
  [exitType, exitColor],
  [searchType, searchColor],
  [pathType, pathColor],
]);

// Rows, Columns options for mobile
export const rowsOptions = Array.from(new Array(maxRowsMobile - minRows + 1), (_, i) => String(i + minRows));
export const colsOptions = Array.from(new Array(maxColumnsMobile - minColumns + 1), (_, i) => String(i + minColumns));
