/*
    Given an array of integers, where all elements but one occur twice, find the unique element.
    Input: 
    a = [1, 2, 3, 4, 3, 2, 1]

    Output:
    4

*/

let data = [1, 2, 6, 1, 2, 5, 9, '33', '33'];

function lonelyinteger(a) {

    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) == a.lastIndexOf(a[i])) {
            return a[i]
        }
    }
}

console.log(lonelyinteger([0, 0, 1, 2, 1])) // 2
console.log(lonelyinteger([1, 1, 2])) // 2
console.log(lonelyinteger([1, 2, 6, 1, 2, 5, 9, '33', '33'])) // 6

