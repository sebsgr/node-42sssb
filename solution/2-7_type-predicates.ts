export { };

type Square = { a: number };
type Circle = { radius: number };
type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
    return typeof ((shape as Square).a) === 'number';
}

declare const shape: Shape;

if (isSquare(shape)) {
    shape.a;
} else {
    shape.radius;
}
