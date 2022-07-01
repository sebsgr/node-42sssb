export { };

let foo: unknown = "";
let bar: any = foo;

foo = 1;                   
let s1: string = foo;      
let s2: string = bar;      

let v1: void = null;       
let v2: void = undefined;  


function keepProcessing(): never {
    while (true) {
        console.log('Infinity Loop');
    }
}

keepProcessing();
keepProcessing();
