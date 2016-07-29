function split(wholeArray) {
    if (wholeArray.length === 1) {
        return wholeArray
    }
    var first = parseInt(wholeArray.length / 2)
        //var second = wholeArray.length - first;
    var firstHalf = wholeArray.slice(0, first)
    var secondHalf = wholeArray.slice(first)
    return [firstHalf, secondHalf];
}

function merge(sortedArray, fnc) {
    var firstSorted = sortedArray[0];
    var secondSorted = sortedArray[1];
    var resultsArray = [];
    if (!fnc) {
        fnc = function (a, b) {
            if (a < b) return -1;
            else if (a === b) return 0;
            return 1;
        }
    }
    while (secondSorted.length !== 0 && firstSorted.length !== 0) {
        //    var lessThan = function(){
        //        var result;
        //            var val = fnc(firstSorted[0], secondSorted[0]);
        //            return val < 0;
        //        }
        //        else{
        //            firstSorted[0] < secondSorted[0];
        //        }
        if (fnc(firstSorted[0], secondSorted[0]) < 0) {
            resultsArray.push(firstSorted.shift());
        }
        else {
            resultsArray.push(secondSorted.shift())
        }
    }
    if (firstSorted.length === 0) {
        resultsArray = resultsArray.concat(secondSorted)
    }
    if (secondSorted.length === 0) {
        resultsArray = resultsArray.concat(firstSorted)
    }
    return resultsArray;
}

function mergeSort(array, fnc) {
    if (array.length <= 1) return array;
    else {
        var splitArrays = split(array);
        var left = mergeSort(splitArrays[0], fnc);
        var right = mergeSort(splitArrays[1], fnc);
        return merge([left, right], fnc);
    }
}

function sortingPerformance() {
    for (var i = 9; i <= 12; i++) {
        var numItems = Math.pow(2, i);
        var nativeTestArray = [];
        for (var j = 0; j < numItems; j++) {
            var rand = Math.floor(Math.random() * numItems);
            nativeTestArray.push(rand);
        }
        var bTestArray = nativeTestArray.slice(0);
        var mTestArray = nativeTestArray.slice(0);
        console.time(numItems + ' native');
        nativeTestArray.sort(function (a, b) {
            return a - b;
        });
        console.timeEnd(numItems + ' native');
        console.time(numItems + ' bubble');
        bubbleSort(bTestArray);
        console.timeEnd(numItems + ' bubble');
        console.time(numItems + ' merge');
        mergeSort(mTestArray);
        console.timeEnd(numItems + ' merge');
    }
}