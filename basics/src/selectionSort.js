export function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let posMin = i;

    for (let j = i; j < list.length; j++) {
      if (list[j] < list[posMin]) {
        posMin = j;
      }
    }

    if (list[i] > list[posMin]) {
      const aux = list[i];
      list[i] = list[posMin];
      list[posMin] = aux;
    }
  }

  return list;
}
