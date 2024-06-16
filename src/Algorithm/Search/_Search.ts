export class Search<T extends Array<number> | Array<string>> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  }

  /**
   * Linear search
   * Time complexity: O(n) - Linear time due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param target - The target value to search for.
   * @returns The index of the target value in the array.
   * @returns -1 if the target value is not found in the array.
   * @example
   * const search = new Search([1, 2, 3, 4, 5]);
   * search.linearSearch(3); // 2
   */

  public linearSearch(target: T): number {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === target) return i;
    }
    return -1;
  }

  /**
   * Binary search
   * Time complexity: O(log n) - Logarithmic time due to halving the search space in each iteration.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param target - The target value to search for.
   * @param recursive - Use recursive approach if true, otherwise use iterative approach.
   * @returns The index of the target value in the array.
   * @returns -1 if the target value is not found in the array.
   * @example
   * const search = new Search([1, 2, 3, 4, 5]);
   * search.binarySearch(3, true); // 2
   * search.binarySearch(3, false); // 2
   */

  public binarySearch(target: T, recursive: boolean = false): number {
    if (this.arr.length === 0) return -1;

    if (recursive) {
      return this.binarySearchRecursive(target, 0, this.arr.length - 1);
    } else {
      return this.binarySearchIterative(target);
    }
  }

  private binarySearchIterative(target: T): number {
    let left = 0;
    let right = this.arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = this.arr[mid];

      if (midValue === target) {
        return mid;
      }

      if (target > midValue) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  private binarySearchRecursive(
    target: T,
    left: number,
    right: number
  ): number {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    const midValue = this.arr[mid];

    if (midValue === target) {
      return mid;
    }

    if (target > midValue) {
      return this.binarySearchRecursive(target, mid + 1, right);
    } else {
      return this.binarySearchRecursive(target, left, mid - 1);
    }
  }
}
