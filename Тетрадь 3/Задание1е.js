function createPoint(x, y) {
  let pointX = x;
  let pointY = y;

  function getX() {
    return pointX;
  }

  function getY() {
    return pointY;
  }

  function translate(dx, dy) {
    pointX += dx;
    pointY += dy;
  }

  function scale(factor) {
    pointX *= factor;
    pointY *= factor;
  }

  return {
    getX,
    getY,
    translate,
    scale
  };
}

let point = createPoint(2, 3);
console.log(point.getX());
console.log(point.getY());

point.translate(1, 2);
console.log(point.getX());
console.log(point.getY());

point.scale(2);
console.log(point.getX());
console.log(point.getY());