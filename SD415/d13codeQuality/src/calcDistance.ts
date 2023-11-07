export function calcDistance(x1: number, y1: number, x2: number, y2: number) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}