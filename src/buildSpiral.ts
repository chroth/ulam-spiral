import times from 'lodash/times';

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
  let x = Math.floor(size / 2) + (size % 2 === 0 ? -1 : 0);
  let y = Math.floor(size / 2);
  let counter = 1;
  let len = 1;

  yield [x, y, counter];
  const maxNum = size * size;

  while (true) {
    // Move horizontal
    for (let i = 0; i < len; i++) {
      x++;
      counter++;
      if (counter > maxNum) {
        return;
      }
      yield [x, y, counter];
    }
    // Move vertical
    for (let i = 0; i < len; i++) {
      y--;
      counter++;
      if (counter > maxNum) {
        return;
      }
      yield [x, y, counter];
    }
    len++;

    // Move horizontal
    for (let i = 0; i < len; i++) {
      x--;
      counter++;
      if (counter > maxNum) {
        return;
      }
      yield [x, y, counter];
    }
    // Move vertical
    for (let i = 0; i < len; i++) {
      y++;
      counter++;
      if (counter > maxNum) {
        return;
      }
      yield [x, y, counter];
    }
    len++;
  }
}
