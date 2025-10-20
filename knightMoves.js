import { createDecisionArray } from "./createDecisionArray.js";

export function knightMoves(input, target){
  if (input.includes(target)) {
      return null;
    }

  const decisions = createDecisionArray(input)
  const queue

      //starting from initial decisions array visit coords then put visited coords in seperate array
      //base case
      const recursiveStep = () => {

        if (decisions.length === 0) {
          return;
        }

        const current = NodesQueue.shift();
        if (current.left) {
          NodesQueue.push(current.left);
        }
        if (current.right) {
          NodesQueue.push(current.right);
        }

        callback(current);
        recursiveStep();

  console.log(input)

  knightMoves(decisions, target);
      }
};