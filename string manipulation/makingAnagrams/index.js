// --- Directions
// Hackerrank Problem: Making Anagrams
// link: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagrams(a, b) {
  let count = 0;
      a = a.split('');
      b = b.split('');
      for (let i=0; i<a.length; i++) {
          for (let j=0; j<b.length; j++) {
              if (b[j] === a[i]) {
                  count++;
                  b[j] = ' ';
                  break;
              }
          }
      }
      return ((a.length + b.length) - (2*count));
}
