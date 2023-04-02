// RETO: https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three

/*
    int n: the number of towers
    int m: the height of each tower
*/

function towerBreakers(n, m) {
    //  P2 siempre gana si n es par o  m es 1, de lo contrario P1 gana
    return (n % 2 == 0 || m == 1) ? 2 : 1 
}







