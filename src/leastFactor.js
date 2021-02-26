/**
Copyright 2012–2013 Kenan Yildirim <http://kenany.me/>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Finds the smallest factor of `n`
 *
 * @private
 * @param {Number} value The value to check
 * @returns {Number}
 *   The smallest prime that divides n
 *   NaN if n is NaN or Infinity
 *   0 if n is 0
 *   1 if n = 1, n = -1, or n is not an integer
 */
export function leastFactor(n) {
  if (n === 0) return 0;
  else if (n % 1 || n * n < 2) return 1;
  else if (n % 2 === 0) return 2;
  else if (n % 3 === 0) return 3;
  else if (n % 5 === 0) return 5;

  var m = Math.sqrt(n);
  for (var i = 7; i <= m; i += 30) {
    if (n % i === 0) return i;
    else if (n % (i + 4) === 0) return i + 4;
    else if (n % (i + 6) === 0) return i + 6;
    else if (n % (i + 10) === 0) return i + 10;
    else if (n % (i + 12) === 0) return i + 12;
    else if (n % (i + 16) === 0) return i + 16;
    else if (n % (i + 22) === 0) return i + 22;
    else if (n % (i + 24) === 0) return i + 24;
  }
  return n;
}
