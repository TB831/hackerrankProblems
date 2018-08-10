// --- Directions
// Hackerank Problem: Sherlock and The Valid String
// link: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function isValid(s) {
    const chars = {};
    s.split('').map(char => {
        chars[char] = chars[char] + 1 || 1;
    })
    for (let value in chars) {
        if (chars[value] < 2) {
            return 'NO';
            break;
        }
    }
    return 'YES';
}
