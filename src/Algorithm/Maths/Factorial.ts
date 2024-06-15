interface IFactorial {
  iterative(n: number): number;
  recursive(n: number): number;
  memoization(n: number): number;
  series(n: number): number[];
}

export class Factorial implements IFactorial {
  private memo: number[];

  constructor() {
    this.memo = [];
  }

  /**
   * Iterative approach to calculate the n-th Factorial number.
   * Time complexity: O(n) - Linear time due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param n - The position in the Factorial sequence.
   * @returns The n-th Factorial number.
   */

  public iterative(n: number): number {
    if (n <= 1) return 1;
    let result: number = 1;

    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }

  /**
   * Recursive approach to calculate the n-th Factorial number.
   * Time complexity: O(n) - Each number is calculated once and stored.
   * Space complexity: O(n) - Extra space used to store memoization array.
   * @param n - The position in the Factorial sequence.
   * @returns The n-th Factorial number.
   */

  public recursive(n: number): number {
    if (n <= 1) return 1;
    return n * this.recursive(n - 1);
  }

  /**
   * Memoization approach to calculate the n-th Factorial number.
   * Time complexity: O(n) - Each number is calculated once and stored.
   * Space complexity: O(n) - Extra space used to store memoization array.
   * @param n - The position in the Factorial sequence.
   * @returns The n-th Factorial number.
   */

  public memoization(n: number): number {
    if (n <= 1) return 1;
    if (this.memo[n] !== undefined) return this.memo[n];

    this.memo[n] = n * this.memoization(n - 1);
    return this.memo[n];
  }

  /**
   * Helper method to multiply two 2x2 matrices.
   * @param n - The position in the Factorial sequence.
   * @returns The n-th Factorial number.
   */

  public series(n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= n; i++) {
      result.push(this.iterative(i));
    }
    return result;
  }
}
