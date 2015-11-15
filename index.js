'use strict';

let sorter = {
  bubble: function(array) {

    let i = 0,
        n = array.length,
        swapped;

    do {
      swapped = false;

      for(i; i < n - 1; i++){
        var indexOne = i,
            indexTwo = i + 1;

        if(array[indexOne] > array[indexTwo]) {
          array = this.arraySwap(array, indexOne, indexTwo);
          swapped = true;
        }
      }

    } while (swapped);

    return array;

  },
  insertion: function() {

  },
  arraySwap: function(array, indexOne, indexTwo) {

    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;

    return array;
  }
}

module.exports = sorter;
