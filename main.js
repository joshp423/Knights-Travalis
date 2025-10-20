const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 0],
]

// console.log(grid);
console.log(grid[7][2])
const input = [7, 2]
export function actualCoordinates(input) {
    let actualYX = [Math.abs(input[0] - 7), Math.abs(input[1] - 7)];
    return actualYX;
}

console.log(actualCoordinates(input))
function decisonsArray(currentY, currentX) {
    let i = currentY
    let j = currentX
    const moveOneX = j+1;
    const moveOneY = i+2;
    const moveTwoX = j+2;
    const moveTwoY = i+1;
    const moveThreeX = j+2;
    const moveThreeY = i-1;
    const moveFourX = j+1;
    const moveFourY = i+2;
    const moveFiveX = j+1;
    const moveFiveY = i+2;
    const moveSixX = j+1;
    const moveSixY = i+2;
    const moveSevenX = j+1;
    const moveSevenY = i+2;
    const moveEightX = j+1;
    const moveEightY = i+2;

    return [
        [moveOneX, moveOneY], [moveTwoX, moveTwoY], [moveThreeX, moveThreeY], [moveFourX, moveFourY], [moveFiveX, moveFiveY], 
        [moveSixX, moveSixY], [moveSevenX, moveSevenY], [moveEightX, moveEightY]
    ]
}

function knightMoves(startingCoords, intendedcoords) {
    new tree
}