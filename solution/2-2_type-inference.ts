export { };

let x = 3;                                      // x: number

function bar(n: number, s: string) {            // bar(n: number, s: string): boolean
    return false;
}

class Foo {
    doSomething() { }                           // doSomething() : void
}
let foo = new Foo();                            // foo: Foo
foo.doSomething();

window.onmousedown = function (mouseEvent) {    // mouseEvent: MouseEvent
    console.log(mouseEvent.button);
    console.log(mouseEvent.foo);                // Error
};

