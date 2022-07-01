export { };

let foo: unknown = "";
let bar: any = foo;

function keepProcessing(): void {
    while (true) {
        console.log('Infinity Loop');
    }
}

keepProcessing();
keepProcessing();