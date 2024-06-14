import { Fibonacci } from './Maths/Fibonacci';

export class Maths {
  private readonly fibonacci: Fibonacci;
  constructor() {
    this.fibonacci = new Fibonacci();
  }
}
