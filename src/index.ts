import { Maths } from './Algorithm/Maths/_Maths';
import { Sort } from './Algorithm/Sort/_Sort';

// console.log(Sort.bubbleSort([1, 0, 5, 6, 2, 8, 3])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(Sort.insertionSort([1, 0, 5, 6, 2, 8, 3])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(
  Maths.cartesianProduct([
    [1, 2, 5],
    [3, 4],
    [5, 6, 8],
  ])
); // [[1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6]]
