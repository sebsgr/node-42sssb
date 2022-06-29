export { };

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

declare var t1: Flatten<number[]>;  // number
declare var t2: Flatten<number>;  // number

type FullFlatten<Type> = Type extends Array<infer Item> ? FullFlatten<Item> : Type;

declare function fullFlatten<T>(t: T): FullFlatten<T>

const s = fullFlatten([1,2,3,4,["", [true, 1]]]);


declare var t3: FullFlatten<number[][][][]>;  // number

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

declare var foo: ReturnType<() => string>    // string

function callNTimes<T extends () => any>(t: T, n: number): ReturnType<T>[] {
    const a: ReturnType<T>[] = [];
    for (let index = 0; index < n; index++) {
        a.push(t());
    }
    return a;
}

const returns = callNTimes(() => "hello", 5);