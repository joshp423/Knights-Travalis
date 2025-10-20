import { createDecisionTree } from "./createDecisionTreeFunction";

export class Node {
  constructor(input) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.coords = [input[0], input[1]];
    this.topLeft = null;
    this.left = null;
    this.bottomLeft = null;
    this.bottom = null;
    this.bottomRight = null;
    this.right = null;
    this.topRight = null;
    this.top = null;
  }
}