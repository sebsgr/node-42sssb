export { };

type Flatten<Type> = ...

declare var t1: Flatten<number[]>;  // number
declare var t2: Flatten<number>;  // number

type FullFlatten<Type> = ...

declare function fullFlatten<T>(t: T): FullFlatten<T>

declare var t3: FullFlatten<number[][][][]>;  // number

const testArray = [1, 2, 3, 4, ["", [true, 1]]];
declare var t4: FullFlatten<typeof testArray>;   // number | string | boolean

type ReturnType<T> = ...