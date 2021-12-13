import { insertionSort } from "../src/insertionSort";

describe("Insertion Sort", () => {
  test("When input is [4, 7, 2, 5, 4, 0] should be return [0, 2, 4, 4, 5, 7]", () => {
    expect(insertionSort([4, 7, 2, 5, 4, 0])).toEqual([
      0, 2, 4, 4, 5, 7,
    ]);
  });

  test("When input is [5, 5, 4, 4, 3, 3] should be return [3, 3, 4, 4, 5, 5]", () => {
    expect(insertionSort([5, 5, 4, 4, 3, 3])).toEqual([
      3, 3, 4, 4, 5, 5,
    ]);
  });

  test("When input is [1, 2, 3, 4, 5] should be return [1, 2, 3, 4, 5]", () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });
});
