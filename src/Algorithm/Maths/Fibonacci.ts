export interface IFibonacci {
  iterative(n: number): number;
  memoization(n: number): number;
  matrix(n: number): number;
  recursive(n: number): number;
}

export class Fibonacci implements IFibonacci {
  // Memoization array to store previously calculated Fibonacci numbers
  private memo: number[];

  constructor() {
    this.memo = [];
  }

  /**
   * Iterative approach to calculate the n-th Fibonacci number.
   * Time complexity: O(n) - Linear time due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   *
   * @param n - The position in the Fibonacci sequence.
   * @returns The n-th Fibonacci number.
   */
  public iterative(n: number): number {
    if (n <= 1) return n;

    let a: number = 0,
      b: number = 1;
    for (let i = 2; i <= n; i++) {
      const c: number = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  /**
   * Memoization approach to calculate the n-th Fibonacci number.
   * Time complexity: O(n) - Each number is calculated once and stored.
   * Space complexity: O(n) - Extra space used to store memoization array.
   *
   * @param n - The position in the Fibonacci sequence.
   * @returns The n-th Fibonacci number.
   */
  public memoization(n: number): number {
    if (n <= 1) return n;
    if (this.memo[n] !== undefined) return this.memo[n];

    this.memo[n] = this.memoization(n - 1) + this.memoization(n - 2);
    return this.memo[n];
  }

  /**
   * Helper method to multiply two 2x2 matrices.
   *
   * @param a - The first 2x2 matrix.
   * @param b - The second 2x2 matrix.
   * @returns The product of the two matrices.
   */
  private multiplyMatrices(a: number[][], b: number[][]): number[][] {
    return [
      [
        a[0][0] * b[0][0] + a[0][1] * b[1][0],
        a[0][0] * b[0][1] + a[0][1] * b[1][1],
      ],
      [
        a[1][0] * b[0][0] + a[1][1] * b[1][0],
        a[1][0] * b[0][1] + a[1][1] * b[1][1],
      ],
    ];
  }

  /**
   * Helper method to compute the power of a matrix.
   * Time complexity: O(log n) - Matrix exponentiation uses divide and conquer approach.
   *
   * @param matrix - The base 2x2 matrix.
   * @param n - The exponent.
   * @returns The matrix raised to the power n.
   */
  private matrixPower(matrix: number[][], n: number): number[][] {
    if (n === 1) return matrix;
    if (n % 2 === 0) {
      const halfPower = this.matrixPower(matrix, n / 2);
      return this.multiplyMatrices(halfPower, halfPower);
    } else {
      return this.multiplyMatrices(matrix, this.matrixPower(matrix, n - 1));
    }
  }

  /**
   * Matrix exponentiation approach to calculate the n-th Fibonacci number.
   * Time complexity: O(log n) - Logarithmic time due to matrix exponentiation.
   * Space complexity: O(1) - Constant space as matrix size is fixed and independent of input size.
   *
   * @param n - The position in the Fibonacci sequence.
   * @returns The n-th Fibonacci number.
   */
  public matrix(n: number): number {
    if (n <= 1) return n;

    const baseMatrix: number[][] = [
      [1, 1],
      [1, 0],
    ];

    const resultMatrix = this.matrixPower(baseMatrix, n - 1);
    return resultMatrix[0][0];
  }

  /**
   * Recursive approach to calculate the n-th Fibonacci number.
   * Time complexity: O(2^n) - Exponential time due to branching recursion.
   * Space complexity: O(n) - Linear space due to recursive call stack.
   *
   * @param n - The position in the Fibonacci sequence.
   * @returns The n-th Fibonacci number.
   */

  public recursive(n: number): number {
    if (n <= 1) return n;
    return this.recursive(n - 1) + this.recursive(n - 2);
  }
}
