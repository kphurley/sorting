function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray
  }
  var first = parseInt(wholeArray.length / 2)
  var second = wholeArray.length - first;
  var firstHalf = wholeArray.slice(0, first)
  var secondHalf = wholeArray.slice(first)

  return [firstHalf, secondHalf];
}

function merge(sortedArray) {
  var firstSorted = sortedArray[0];
  var secondSorted = sortedArray[1];
  var resultsArray = [];
  while (secondSorted.length !== 0 && firstSorted.length !== 0) {
    if (firstSorted[0] < secondSorted[0]) {
      resultsArray.push(firstSorted.shift());
    } else {
      resultsArray.push(secondSorted.shift())
    }
  }
  if (firstSorted.length === 0){
    resultsArray = resultsArray.concat(secondSorted)
  }
  if (secondSorted.length === 0){
    resultsArray = resultsArray.concat(firstSorted)
  }
  return resultsArray;
}
