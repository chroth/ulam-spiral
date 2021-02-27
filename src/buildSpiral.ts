import times from 'lodash/times';

// size 1
/**
 * 01
 */
// size 3
/**
 * 05 04 03
 * 06 01 02
 * 07 08 09
 */
// size 5
/**
 * 17 16 15 14 13
 * 18 05 04 03 12
 * 19 06 01 02 11
 * 20 07 08 09 10
 * 21 22 23 24 25
 */
// size 7
/**
 * 37 36 35 34 33 32 31
 * 38 17 16 15 14 13 30
 * 39 18 05 04 03 12 29
 * 40 19 06 01 02 11 28
 * 41 20 07 08 09 10 27
 * 42 21 22 23 24 25 26
 * 43 44 45 46 47 48 49
 */

export type SpiralT = Array<Array<number>>;

export const buildSpiral = (size: number): SpiralT => {
  const spiral = times(size, () => times(size, () => 0));
  const spiralGenerator = buildSpiralGenerator(size);

  for (const nextValues of spiralGenerator) {
    const [x, y, counter] = nextValues;
    spiral[y][x] = counter;
  }

  return spiral;
};

export function* buildSpiralGenerator(
  size: number
): Generator<[number, number, number]> {
  let xMin = 0;
  let xMax = size - 1;
  let yMin = 0;
  let yMax = size - 1;
  const maxValue = size * size;
  let nextBreakpoint = size - 2;

  let x = xMax - (size % 2 === 0 ? -1 : 0);
  let y = yMax;
  for (let counter = maxValue; counter > 1; counter--) {
    yield [x, y, counter];

    if (counter - 1 <= nextBreakpoint * nextBreakpoint) {
      xMin++;
      yMin++;
      xMax--;
      yMax--;
      nextBreakpoint -= 2;
    }

    if (x === xMin && y !== yMin) {
      y--;
    } else if (y === yMin && x !== xMax) {
      x++;
    } else if (x === xMax && y !== yMax) {
      y++;
    } else if (y === yMax && x !== xMin) {
      x--;
    }
  }

  yield [yMin, xMin, 1];
}
