/*
    Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where k = (n + 1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

    Input:
    2 3 5 4 6
    Output:
    2 3 6 5 4

*/



function findZigZagSequence(input){
    let numbers = input.split("\n")[2].split(" ").sort((a, b) => a - b)
    // console.log("Primero:",numbers)
    const mid = (numbers.length - 1) / 2; 
    
    const firstMiddle = numbers.slice(0, mid).join(" ")
    const numMiddle = numbers[numbers.length - 1]
    const secondMiddle = numbers.slice(mid, -1).reverse().join(" ")

    // console.log(firstMiddle, numMiddle, secondMiddle)
    
    return firstMiddle + " " + numMiddle + " " + secondMiddle
}


console.log(findZigZagSequence("1\n7\n1 2 3 4 5 6 7")) // 1 2 3 7 6 5 4
console.log(findZigZagSequence("1\n5\n2 3 5 4 6")) // 2 3 6 5 4