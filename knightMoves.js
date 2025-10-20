import { createDecisionArray } from "./createDecisionArray.js";

function isVisited(visited, target){
  for (let coord of visited) {
    if (coord[0] === target[0] && coord[1] === target[1]) {
      return true;
    }
  }
  return false;
};

export function knightMoves(input, target){

  //set up queue as input and then nested path we took to get there
  const queue = [[input, [input]]];
  
  //set up visited array to avoid infinite loop on bad paths
  const visited = [];

  while (queue.length > 0) {
    
    // set up current and path variables to store what comes off the queue as above
    // this is so I can use current to keep track and return path when complete
    const [current, path] = queue.shift();
    
    // check if we have visited before, if so skip to next loop
    if (isVisited(visited, target)) continue;

    //push current to visited
    visited.push(current)

    //if current is the target stop the loop and return the path
    if (current[0] === target[0] && current[1] === target[1]){
      return path;
    }

    //load valid decisions of current into variable
    const decisions = createDecisionArray(current)

    //loop through variable and if it has not been visited push it to the queue
    for (let decision of decisions) {
      if (!isVisited(visited, decision)){

        // use spread "..." operator to copy all elements to the new array
        // then add decision on the end as its the next in the path
        //queue now equals [[next in queue decision], [existing path, next in queue decision]
        queue.push([decision, [...path, decision]])
      }
    }
  }

  //return null if no paths - should never happen
  return null;
};


