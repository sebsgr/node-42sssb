let foo: number | string = "" as any;
        
console.log(foo.length)             // Error
console.log(foo.toExponential());   // Error

console.log(foo.toLocaleString());  // OK

if (typeof foo === "string") {
    console.log(foo.length);
}
else {
    console.log(foo.toExponential());
}