/*
    The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

    Input: 
    arr = [5, 3, 1, 2, 4] => sorted [1, 2, 3, 4, 5]
    Output:
    3
*/


function findMedian(arr) {
    arr = arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}


console.log(findMedian([5, 3, 1, 2, 4])) // 3
console.log(findMedian([0, 1, 2, 4, 6, 5, 3])) // 3
console.log(findMedian([1, 2, 3, 98, 5, 6])) // 5