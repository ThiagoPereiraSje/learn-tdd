import { selectionSort } from "../src/selectionSort";

describe("Selection Sort", () => {
  test("For [7, 5, 1, 8, 3] most be return [1, 3, 5, 7, 8]", () => {
    expect(selectionSort([7, 5, 1, 8, 3])).toEqual([
      1, 3, 5, 7, 8,
    ]);
  });

  test("For [3, 2, 1, 0] most be return [0, 1, 2, 3]", () => {
    expect(selectionSort([3, 2, 1, 0])).toEqual([
      0, 1, 2, 3,
    ]);
  });
});
