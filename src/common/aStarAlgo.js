import Heap from 'heap-js';

import { delay, setGridCell } from "./helper";
import { toast } from "react-toastify";
import { searchType, pathType, currentType } from "./config";


/**
 * Reverse traces the path from exit to entry using parents info
 * @param {PathNode} entry - The Entry PathNode.
 * @param {PathNode} current_node - The PathNode we ended on.
 * @param {number[][]} grid - The grid of cells.
 * @param {function} setGrid - The function for setting the grid.
 * @param {boolean} isInProgress - False if reset or random board has been pressed.
 * @returns {number} - The length of the path we found.
 */
async function tracePath(entry, current_node, grid, setGrid, isInProgress) {
  let pathLength = 0;
  // if entry and exit are next to each other
  if (entry.isEqual(current_node)) {
    return pathLength;
  }

  // Start marking the path with a small delay
  while (isInProgress.current && !current_node.isEqual(entry)) {
    setGridCell(grid, setGrid, current_node.coords.x, current_node.coords.y, pathType, entry);
    await delay(100);
    current_node = current_node.parent;
    pathLength += 1;
  }

  return pathLength;
}


/**
 * Get all valid neighbor PathNodes for the currentNode.
 * @param {number[][]} grid - The grid of cells.
 * @param {PathNode} currentNode - The PathNode that we are currently looking at.
 * @return {PathNode[]} An Array of valid neighbor Path Nodes.
 */
 function getValidNeighbors(grid, currentNode) {
  var validNeighbors = [];

  // The list of x, y translations to the currentNodes coords to
  // get neighbors up, down, left, right. Add {x: -1, y: -1},
  // {x: 1, y: 1}, {x: -1, y: 1}, and {x: 1, y: -1} to allow diagonals
  var translations = [{x: 0, y: 1}, {x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}];

  for (let trans of translations) {
    // The possible coordinates of the new neighbor
    var newNeighborCoords = {
      x: currentNode.coords.x + trans.x,
      y: currentNode.coords.y + trans.y,
    };

    // If new neighbors' x or y are outside of the grid, skip
    if (
      newNeighborCoords.x > (grid.length - 1) ||
      newNeighborCoords.x < 0 ||
      newNeighborCoords.y > (grid.length[0] -1) ||
      newNeighborCoords.y < 0
    ) {
      continue;
    }

    // If new neighbor cell is a wall, skip
    if (grid[newNeighborCoords.x][newNeighborCoords.y] == 1) {
      continue;
    }

    // New neighbor coords are valid, create a new PathNode
    // and add it to the list of neighbors
    validNeighbors.push(new PathNode(currentNode, newNeighborCoords));
  }

  return validNeighbors;
}


/**
 * A valid PathNode that we might visit.
 * @property {PathNode} parent - The PathNode before this PathNode.
 * @property {{x: number, y: string}} coords - The (x, y) coords of this cell in the grid.
 * @property {number} distanceFromEntryNode - The actual distance, in steps, from the Entry PathNode.
 * @property {number} estimatedDistanceFromExitNode - The estimated distance, using our heuristic,
 *                                                    from the Exit PathNode.
 * @property {number} totalCost - The total cost for this PathNode, used for determining which PathNode
 *                                to investigate next.
 */
class PathNode {
  /**
   * Create a PathNode.
   * @param {PathNode} parent - The PathNode before this PathNode.
   * @param {{x: number, y: string}} coords - The (x, y) coords of this cell in the grid. 
   */
  constructor(parent, coords) {
    this.parent = parent;
    this.coords = coords;

    this.distanceFromEntryNode = 0;
    this.estimatedDistanceFromExitNode = 0;
    this.totalCost = 0;
  }

  /**
   * Compares this PathNode with another for equality using their coords.
   * @param {PathNode} other - The PathNode to compare with.
   * @return {boolean} If these PathNodes are for the same cell.
   */
  isEqual(other) {
    return this.coords.x == other.coords.x && this.coords.y == other.coords.y;
  }

  /**
   * Returns the value of this PathNode - used for Min Heap.
   * @return {number} The total cost to reach this PathNode.
   */
  valueOf() {
    return this.totalCost;
  }
}


/**
 * A HashSet of PathNodes, used to efficiently avoid revisiting
 * PathNodes we've already explored.
 * @property {Object.<string, boolean>} hashSet - The underlying Object
 *                                                used for O(1) contains
 *                                                operations.
 */
class PathNodeHashSet {
  // Create a PathNodeHashSet.
  constructor() {
    this.hashSet = {};
  }

  /**
   * Adds a PathNode to the HashSet.
   * @return {boolean} True if HashSet does not already contain this PathNode.
   */
  add(node) {
    if (this.contains(node)) {
      return false;
    } else {
      this.hashSet[node.coords.x + "," + node.coords.y] = true;
      return true;
    }
  }

  /**
   * Checks if a PathNode exists in the HashSet.
   * @return {boolean} If this PathNode exists in the HashSet.
   */
  contains(node) {
    return this.hashSet[node.coords.x + "," + node.coords.y] === true;
  }
}


/**
 * Runs the A* Search Algorithm on the grid.
 * @param {number[][]} grid - The grid of cells.
 * @param {function} setGrid - The function for setting the grid.
 * @param {{x: number, y: number}} entry - The Entry cell coords.
 * @param {{x: number, y: number}} exit - The Exit cell coords.
 * @param {boolean} isInProgress - False if reset or random board has been pressed.
 */
export async function startAStarAlgo(grid, setGrid, entry, exit, isInProgress) {
  const entry_node = new PathNode(null, entry);
  const exit_node = new PathNode(null, exit);

  // Store open list as a Min Heap on PathNode totalCost
  var open_list = [];
  Heap.heapify(open_list);

  // Store closed list as a HashSet of PathNodes
  var closed_list = new PathNodeHashSet();

  // Add the start node
  Heap.heappush(open_list, entry_node);

  let isPathFound = false;
  outerLoop: while (open_list.length > 0) {
    // Pop the PathNode with the smallest totalCost, add to closed list
    var current_node = Heap.heappop(open_list);
    closed_list.add(current_node);
    // Mark current cell as current
    setGridCell(grid, setGrid, current_node.coords.x, current_node.coords.y, currentType, entry);

    // If reset is pressed, stop running the algorithm
    if (!isInProgress.current) break outerLoop;

    // Check neighbors for valid PathNodes to search
    findValidNeighbors: for (let neighbor of getValidNeighbors(grid, current_node)) {
      if (closed_list.contains(neighbor)) continue findValidNeighbors;

      // Found the exit PathNode!
      if (neighbor.isEqual(exit_node)) {
        isPathFound = true;
        break outerLoop;
      }

      // Calculate values for this PathNode
      neighbor.distanceFromEntryNode = current_node.distanceFromEntryNode + 1;
      neighbor.estimatedDistanceFromExitNode = ((neighbor.coords.x - exit_node.coords.x) ** 2) + ((neighbor.coords.y - exit_node.coords.y) ** 2);
      neighbor.totalCost = neighbor.distanceFromEntryNode + neighbor.estimatedDistanceFromExitNode;

      for (let i = 0; i < open_list.length; i++) {
        // Neighbor is already in the open list
        if (neighbor.isEqual(open_list[i])) {
          if (neighbor.distanceFromEntryNode >= open_list[i].distanceFromEntryNode) {
            continue findValidNeighbors;
          } else {
            // We need to replace this entry as we've found a shorter path
            open_list.splice(i, 1, neighbor);
            Heap.heapify(open_list);
          }
        }
      }

      // Add the neighbor to the open list
      Heap.heappush(open_list, neighbor);
      // Mark neighbor cells as being searched
      setGridCell(grid, setGrid, neighbor.coords.x, neighbor.coords.y, searchType, entry);
    }
    await delay(100);
  }

  if (isPathFound && isInProgress.current) {
    // trace the path only if present
    toast.success("Path found!!! 😃");
    const pathLength = await tracePath(entry_node, current_node, grid, setGrid, isInProgress);

    if (isInProgress.current) {
      toast("Shortest path length is " + (pathLength + 1));
    }
    return;
  }

  // if no path found
  if (isInProgress.current) {
    toast.warning("No path found!!! 😟");
    return;
  }
}
