export function bubbleSort(list) {
  // (N -1) * 3(N -1)
  for (let i = 0; i < list.length - 1; i++) {
    // (N -1) * 3
    for (let j = 0; j < list.length - 1; j++) {
      // 1 * 3 = 3
      if (list[j] > list[j + 1]) {
        const aux = list[j];
        list[j] = list[j + 1];
        list[j + 1] = aux;
      }
    }
  }

  return list;
}
