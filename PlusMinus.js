/*
    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

    Example:
    arr = [1, 1, 0, -1, -1]
    positive: 2 / 5 = 0.400000
    negative: 2 / 5 = 0.400000
    zero: 1 / 5 = 0.200000
*/


function plusMinus(arr) {
    let amountPositives = 0
    let amountNegatives = 0
    let amountZeros = 0
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){ amountPositives++}
        if(arr[i] < 0){ amountNegatives++}
        if(arr[i] == 0){ amountZeros++}
    }

    console.log((amountPositives/arr.length).toFixed(6))
    console.log((amountNegatives/arr.length).toFixed(6))
    console.log((amountZeros/arr.length).toFixed(6))
}


plusMinus([-4, 3, -9, 0, 4, 1])
// 0.500000
// 0.333333
// 0.166667

plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
// 0.375000
// 0.375000
// 0.250000