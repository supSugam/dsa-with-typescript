import { Factorial } from './Factorial';
import { Fibonacci } from './Fibonacci';

export class Maths {
  static fibonacci: Fibonacci;
  static factorial: Factorial;
  constructor() {
    Maths.fibonacci = new Fibonacci();
    Maths.factorial = new Factorial();
  }

  /**
   * Check if a number is prime.
   * Time complexity: O(sqrt(n)) - Square root of n due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param n - The number to check.
   * @returns True if the number is prime, false otherwise.
   */

  static isPrime(n: number): boolean {
    if (n < 2) return false;
    if (n < 4) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  /**
   * Check if a number is composite.
   * Time complexity: O(sqrt(n)) - Square root of n due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param n - The number to check.
   * @returns True if the number is composite, false otherwise.
   */

  static isComposite(n: number): boolean {
    return !this.isPrime(n);
  }

  /**
   * Check if a number is a perfect square.
   * Time complexity: O(sqrt(n)) - Square root of n due to single loop through n iterations.
   * Space complexity: O(1) - Constant space as no extra space used proportional to input size.
   * @param n - The number to check.
   * @param bitwise - Use bitwise operator to check if number is a perfect square.
   * @returns True if the number is a perfect square, false otherwise.
   */

  static isPowerOfTwo(n: number, bitwise: boolean = false): boolean {
    if (bitwise) {
      return (n & (n - 1)) === 0;
    }
    if (n < 1) return false;
    while (n > 1) {
      if (n % 2 !== 0) return false;
      n = n / 2;
    }
    return true;
  }

  /**
   * Get Cartesian product of arrays.
   * Time complexity: O(n^2) - Quadratic time due to nested loops through n iterations.
   * Space complexity: O(n) - Linear space as extra space used proportional to input size.
   * @param arrays - The arrays to get the Cartesian product of.
   * @returns The Cartesian product of the arrays.
   * @example
   * Maths.cartesianProduct([[1, 2], [3, 4], [5, 6]]); // [[1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6]]
   */
  static cartesianProduct<T extends Array<Array<unknown>>>(arrays: T) {
    return arrays.reduce(
      (pre, curr, i) => {
        return pre.flatMap((preEl) =>
          curr.map((currEl) => [preEl, currEl].flat())
        );
      },
      [[]]
    );
  }

  /**
   * Get number of distinct ways to climb a staircase.
   * Time complexity: O(2^n) - Exponential time due to recursive calls through n iterations.
   * Space complexity: O(n) - Linear space due to recursive calls.
   * @param n - The number of steps in the staircase.
   * @param maxStepsAtATime - The maximum number of steps that can be taken at a time.
   * @returns The number of distinct ways to climb the staircase.
   * @example Maths.climbStaircase(5); // 8
   */
  static climbStaircase(n: number, maxStepsAtATime: number = 2): number {
    if (n <= 1) return 1;
    let sum = 0;
    for (let i = 1; i <= maxStepsAtATime; i++) {
      sum += this.climbStaircase(n - i, maxStepsAtATime);
    }
    return sum;
  }
}
