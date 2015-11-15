'use strict';

let sorter = {
  bubble: function(array) {

    let i,
        swapped,
        n = array.length;

    do {
      swapped = false;

      for(i = 0; i < n - 1; i++){
        var indexOne = i,
            indexTwo = i + 1;

        if(array[indexOne] > array[indexTwo]) {
          array = this.swap(array, indexOne, indexTwo);
          swapped = true;
        }
      }

    } while (swapped);

    return array;

  },
  insertion: function(array) {
   let n = array.length;

   for(var i = 1; i < n; ++i) {
     var temp = array[i];
     var j = i - 1;
     for(; j >= 0 && array[j] > temp; --j) {
       array[j+1] = array[j];
     }
     array[j+1] = temp;
   }
   return array;
  },
  swap: function(array, indexOne, indexTwo) {

    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;

    return array;
  }
}

module.exports = sorter;
