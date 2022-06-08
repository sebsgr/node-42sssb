export {};

declare let foo: number | string;

console.log(foo.length)             // Error
console.log(foo.toExponential());   // Error

console.log(foo.toLocaleString());  // OK

if (typeof foo === "string") {
    console.log(foo.length);
}
else {
    console.log(foo.toExponential());
}