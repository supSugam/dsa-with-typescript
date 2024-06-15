export class Search<T extends Array<number> | Array<string>> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  }

  public linearSearch<T>(array: T[], target: T): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) return i;
    }
    return -1;
  }

  public binarySearch(target: T, recursive = false): number {
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
