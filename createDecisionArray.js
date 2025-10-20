export function createDecisionArray(coords) {
    const tree = [];
    const y = coords[0];
    const x = coords[1];
    

    if (y + 2 <= 7) {
        if (x + 1 <= 7) {tree.push([y + 2, x + 1])};
        if (x - 1 >= 0) {tree.push([y + 2, x - 1])};
    }
 
    if (y + 1 <= 7) {
        if (x + 2 <= 7) {tree.push([y + 1, x + 2])};
        if (x - 2 >= 0) {tree.push([y + 1, x - 2])};
    }

    if (y - 2 >= 0) {
        if (x + 1 <= 7) {tree.push([y - 2, x + 1])};
        if (x - 1 >= 0) {tree.push([y - 2, x - 1])};
    }

    if (y - 1 >= 0) {
        if (x + 2 <= 7) {tree.push([y - 1, x + 2])};
        if (x - 2 >= 0) {tree.push([y - 1, x - 2])};
    }
    
    return tree;
}