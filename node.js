export class Node {
  constructor(y, x) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.y = y;
    this.nextNode = null;
  }
}