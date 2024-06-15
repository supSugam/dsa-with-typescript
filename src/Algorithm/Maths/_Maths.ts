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
    return !Maths.isPrime(n);
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
}
