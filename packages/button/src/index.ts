export interface Button {
  a: number;
  c: number;
}

export function createButton(): Button {
  return {
    a: 0,
    c: 2,
  };
}
