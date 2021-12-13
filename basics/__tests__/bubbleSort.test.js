import { bubbleSort } from "../src/bubbleSort";

describe("Bubble Sort", () => {
  test("When input is [4, 9, 2, 1, 7, 8] should be return [1, 2, 4, 7, 8, 9]", () => {
    expect(bubbleSort([4, 9, 2, 1, 7, 8])).toEqual([
      1, 2, 4, 7, 8, 9,
    ]);
  });

  test("When input is [10, 9, 8, 7] should be return [7, 8, 9, 10]", () => {
    expect(bubbleSort([10, 9, 8, 7])).toEqual([
      7, 8, 9, 10,
    ]);
  });
});
