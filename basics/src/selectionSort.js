export function selectionSort(list) {
  // N * (N + 3)
  for (let i = 0; i < list.length; i++) {
    let posMin = i;

    // N * 1 * 1 = N
    for (let j = i; j < list.length; j++) {
      // 1
      if (list[j] < list[posMin]) {
        // 1
        posMin = j;
      }
    }

    // 1 * (3) = 3
    if (list[i] > list[posMin]) {
      const aux = list[i];
      list[i] = list[posMin];
      list[posMin] = aux;
    }
  }

  return list;
}
