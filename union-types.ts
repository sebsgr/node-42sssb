export { };

declare const foo: number | string;

foo.length;            // Error
foo.toExponential();   // Error

foo.toLocaleString();

