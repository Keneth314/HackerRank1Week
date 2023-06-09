/*
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    Example:
    arr = [1, 3, 5, 7, 9]
    The minimum sum is 1+3+5+7 = 16 
    the maximum sum is 3+5+7+9 = 24

    The function prints: 16 24
*/

function miniMaxSum(arr) {
    let orderedArray = arr.sort()
    let minValue = orderedArray.slice(0, 4).reduce( (acum, num) => acum + num)
    let maxValue = orderedArray.slice(1).reduce( (acum, num) => acum + num)
    console.log(minValue, maxValue)
}

miniMaxSum([1, 2, 3, 4, 5]) // 10 14
miniMaxSum([7, 69, 2, 221, 8974]) // 299 9271