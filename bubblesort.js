function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < array.length - i; x++) {
      if (array[x] > array[x + 1]) {
        var temp = array[x];
        array[x] = array[x + 1];
        array[x + 1] = temp;
      }
    }
  }
  return array;
}
