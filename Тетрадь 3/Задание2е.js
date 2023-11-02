class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  translate(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  scale(factor) {
    this.x *= factor;
    this.y *= factor;
  }
}

const p = new Point(2, 3);

const x = p.getX();
const y = p.getY();
console.log(`x: ${x}, y: ${y}`);

p.translate(1, 2);
console.log(`x: ${p.getX()}, y: ${p.getY()}`);

p.scale(2);
console.log(`x: ${p.getX()}, y: ${p.getY()}`);