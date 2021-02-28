export function isPrime(n: number): boolean {
  if (n === 2 || n === 3) return true;
  if (n < 2 || n % 2 === 0) return false;
  if (n < 9) return true;
  if (n % 3 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  let f = 5;
  while (f <= r) {
    if (n % f === 0) return false;
    if (n % (f + 2) == 0) return false;
    f += 6;
  }
  return true;
}
