import { selectionSort } from "../src/selectionSort";

describe("Selection Sort", () => {
  test("When input is [7, 5, 1, 8, 3] should be return [1, 3, 5, 7, 8]", () => {
    expect(selectionSort([7, 5, 1, 8, 3])).toEqual([
      1, 3, 5, 7, 8,
    ]);
  });

  test("When input is [3, 2, 1, 0] should be return [0, 1, 2, 3]", () => {
    expect(selectionSort([3, 2, 1, 0])).toEqual([
      0, 1, 2, 3,
    ]);
  });
});
