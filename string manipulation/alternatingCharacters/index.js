// --- Directions
// Hackerranks problem:
// link: https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
  let count = 0;
  s = s.split('');
  for (let i=0; i<s.length; i++) {
    if (s[i] === s[i+1]) {
      count++;
    }
  }
  return count;
}
