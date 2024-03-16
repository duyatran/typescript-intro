function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

// @ts-expect-error
const addResult = add(3, '5');