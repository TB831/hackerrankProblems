// --- Directions
// Hackerrank problem: Left Rotation
// link: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let myArr = a.slice(d);
    for (let i=0; i<d; i++) {
        myArr.push(a.shift());
    }
    return myArr;
}
