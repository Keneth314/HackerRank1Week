/*
    Given a square matrix, calculate the absolute difference between the sums of its diagonals.
    
    Input:
    11 2 4
    4 5 6
    10 8 -12 
    Explication: (11 + 5 - 12 = 4), (4 + 5 + 10 = 19) => |4 - 19| = 15

    Output:
    15
*/



function diagonalDifference(arr) {
    let size = arr.length
    let leftDiagonal = 0
    let rightDiagonal = 0
    
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(i == j){leftDiagonal += arr[i][j]}
            if(i + j == size - 1){rightDiagonal += arr[i][j]}
        }   
    }
    
    return Math.abs(leftDiagonal - rightDiagonal)
}


console.log(diagonalDifference([[1, 2, 3], 
                                [4, 5, 6],
                                [9, 8, 9] ])) // 2

console.log(diagonalDifference([[-10, 3, 0, 5, -4], 
                                [2, -1, 0, 2, -8], 
                                [9, -2, -5, 6, 0], 
                                [9, -7, 4, 8, -2], 
                                [3, 7, 8, -5, 0] ])) // 3