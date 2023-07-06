function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let target = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[target]) {
        target = j;
      }
    }
    if (i != target) {
      let temp = arr[i];
      arr[i] = arr[target];
      arr[target] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
