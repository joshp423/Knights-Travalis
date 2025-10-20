import { createDecisionArray } from "./createDecisionArray.js";

export class Node {
  constructor(input) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.coords = [input[0], input[1]];
    this.options = createDecisionArray(input);
  }
}