export function selectionSort(list) {
  // (N - 1) * (2N + 4)
  for (let i = 0; i < list.length - 1; i++) {
    let posMin = i;

    // N * 2 = 2N
    for (let j = i; j < list.length; j++) {
      // 1 + 1 = 2
      if (list[j] < list[posMin]) {
        // 1
        posMin = j;
      }
    }

    // 1 + 3 = 4
    if (list[i] > list[posMin]) {
      const aux = list[i];
      list[i] = list[posMin];
      list[posMin] = aux;
    }
  }

  return list;
}
