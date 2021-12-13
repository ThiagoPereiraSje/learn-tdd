export function insertionSort(list) {
  // (N -1) * (3 + ((N -1) * 2))
  for (let i = 1; i < list.length; i++) {
    // 2
    const current = list[i];
    let j = i - 1;

    // (N -1) * 2
    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
    }

    // 1
    list[j + 1] = current;
  }

  return list;
}
