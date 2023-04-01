/*
    Sean invented a game involving a  matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the  submatrix located in the upper-left quadrant of the matrix.
    Given the initial configurations for  matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

    Explanation:

    Start out with the following 2n x 2n matrix:
    |112 42  83  119|
    |56  125 56  49 |
    |15  78  101 43 |
    |62  98  114 108|

    Perform the following operations to maximize the sum of the n x n submatrix in the upper-left quadrant:
    - Reverse column 2, resulting in the matrix
    |112 42  114  119|
    |56  125 101  49 |
    |15  78  56   43 |
    |62  98  83   108|

    - Reverse row 0, resulting in the matrix
    |119 114 42   112|
    |56  125 101  49 |
    |15  78  56   43 |
    |62  98  83   108|

    The sum of values in the n x n  submatrix in the upper-left quadrant is 119 + 154 + 56 + 125 = 414
*/


// Referencia: https://www.hackerrank.com/challenges/flipping-the-matrix/forum/comments/1250453 

function flippingMatrix(matrix) {

    let finalCount = 0, highNum = 0
    let mid = matrix.length / 2 // Solo trabajaremos con la mitad del arreglo

    for (let i = 0; i < mid; i++) {
        for (let j = 0; j < mid; j++) {

            // Esquina superior izquierda
            highNum = 0
            matrix[i][j] > highNum ? highNum = matrix[i][j] : 0 // comprobamos si es mayor

            // Esquina superior derecha
            matrix[i].reverse(); // giramos horizontalmente la fila
            matrix[i][j] > highNum ? highNum = matrix[i][j] : 0 // comprobamos si es mayor que el anterior número

            // Esquina inferior izquierda
            matrix.reverse() // giramos el arreglo, los últimos elementos pasan a ser los primeros
            matrix[i][j] > highNum ? highNum = matrix[i][j] : 0 // 

            // Esquina inferior derecha
            matrix[i].reverse() // giramos horizontalmente la fila
            matrix[i][j] > highNum ? highNum = matrix[i][j] : 0

            finalCount += highNum // sumamos el número mayor al contador final
        }
    }
    return finalCount;
}

console.log(flippingMatrix([[1, 2], [9, 4]])) // 9
console.log(flippingMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])) // 54
console.log(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])) // 414
