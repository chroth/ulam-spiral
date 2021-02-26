import { buildSpiral } from "./buildSpiral";

test("buildSpiral", () => {
  expect(buildSpiral(3)).toEqual([
    [5, 4, 3],
    [6, 1, 2],
    [7, 8, 9],
  ]);

  expect(buildSpiral(5)).toEqual([
    [17, 16, 15, 14, 13],
    [18, 5, 4, 3, 12],
    [19, 6, 1, 2, 11],
    [20, 7, 8, 9, 10],
    [21, 22, 23, 24, 25],
  ]);
});
