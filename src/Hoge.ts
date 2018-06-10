// @flow
export interface Hoge {
  x: number;
  y: number;
}

export const hoge = (hoge: Hoge | null): Hoge => {
  if (hoge) {
    return hoge
  }
  return {
    x: 0,
    y: 0,
  }
}
