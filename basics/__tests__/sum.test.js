import { sum } from "../src/sum";

test("Soma de dois numeros inteiros", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(4, 4)).toBe(8);
  expect(sum(1, 1)).not.toBe(3);
  expect(sum(4, 4)).not.toBe(9);
});
