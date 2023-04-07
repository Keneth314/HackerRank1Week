/*
  Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

  Challenge: https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four

*/


function gridChallenge(grid) {

  let sizeI = grid.length
  
  for (let i = 0; i < sizeI; i++) {
    // console.log(grid[i].sort((a, b) => a-b))
    grid[i] = grid[i].split("")
    grid[i].sort()
  }

  let sizeJ = grid[0].length // Guardamos el tamaño en J, porque no todas las entradas son m x m

  // console.log(grid)

  // Analizando columnas
   for(let i = 0; i < sizeI; i++){
    for (let j = 0; j < sizeJ - 1; j++) {

      if(grid[j][i] > grid[j+1][i]){ // En tiempo de compilación si (j+1) sale del rango, JS lo tomará como false
        return "NO"
      }
    }
  }

  return "YES"
}


console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"])) // YES
console.log(gridChallenge(["mpxz", "abcd", "wlmf"])) // NO
console.log(gridChallenge(["abc", "hjk", "mpq", "rtv"])) // YES



