type ArrayToSort = Array<string> | Array<number>;
type PivotPosition = 'first' | 'middle' | 'last' | 'random';
export class Sort {
  /**
   * Bubble sort
   * Time complexity: O(n^2) - Quadratic time due to nested loops through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param arr - The array to be sorted.
   * @returns The sorted array.
   * @example
   * Sort.bubbleSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
   */

  static bubbleSort<T extends ArrayToSort>(arr: T): T {
    let swapped: boolean = false;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

  /**
   * Insertion sort
   * Time complexity: O(n^2) - Quadratic time due to nested loops through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param arr - The array to be sorted.
   * @returns The sorted array.
   * @example
   * Sort.insertionSort([5, 4, 1, 2, 3]); // [1, 2, 3, 4, 5]
   */

  static insertionSort<T extends ArrayToSort>(arr: T): T {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }

  /**
   * Time complexity: O(n log n) - Log-linear time due to partitioning the array into halves.
   * Space complexity: O(log n) - Logarithmic space due to recursive calls.
   * @param arr - The array to be sorted.
   * @param pivotPosition - "first", "middle", "last", or "random" pivot position.s
   * @returns The sorted array.
   * @example
   * Sort.quickSort([5, 4, 1, 2, 3], 'first'); // [1, 2, 3, 4, 5]
   */

  static quickSort<T extends ArrayToSort>(
    arr: T,
    pivotPosition: PivotPosition = 'first'
  ): T {
    if (arr.length <= 1) return arr;
    const pivot =
      arr[
        pivotPosition === 'first'
          ? 0
          : pivotPosition === 'last'
          ? arr.length - 1
          : pivotPosition === 'middle'
          ? Math.floor(pivotPosition.length / 2)
          : Math.floor(Math.random() * arr.length)
      ];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return Sort.quickSort(left as ArrayToSort, pivotPosition).concat(
      [pivot],
      Sort.quickSort(right as ArrayToSort, pivotPosition)
    ) as T;
  }

  /**
   * Merge sort
   * Time complexity: O(n log n) - Log-linear time due to partitioning the array into halves.
   * Space complexity: O(n) - Linear space due to creating new arrays.
   * @param arr - The array to be sorted.
   * @returns The sorted array.
   * @example
   * Sort.mergeSort([5, 4, 1, 2, 3]); // [1, 2, 3, 4, 5]
   */

  static mergeSort<T extends ArrayToSort>(arr: T): T {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle) as T;
    const right = arr.slice(middle) as T;
    return this.merge(this.mergeSort(left), this.mergeSort(right)) as T;
  }

  private static merge<T extends ArrayToSort>(left: T, right: T): T {
    const sorted = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        const shift = left.shift();
        if (shift) sorted.push(shift);
      } else {
        const shift = right.shift();
        if (shift) sorted.push(shift);
      }
    }
    return sorted.concat(left, right) as T;
  }
}
