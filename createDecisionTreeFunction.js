import { Node } from "./node.js";
import { Tree } from "../BinarySearchTrees/Tree.js";
import { createDecisionArray } from "./createDecisionArray.js";
import { actualCoordinates } from "./main.js";

//recursive create tree function
export function createDecisionTree(input, target) {
    if (input === target) return null;

    let root = new Node(actualCoordinates(input))
    root.options = createDecisionArray(input);
    root.options.forEach((option) => {
        const newNode = createDecisionArray(option);
    })

    return root;
}