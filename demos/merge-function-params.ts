export { };

type FirstParam<T extends (first: any, ...other: any) => any> = T extends (first: infer P, ...other: any) => any ? P : never

type SecondParam<T extends (first: any, second: any, ...other: any) => any> = T extends (first: any, second: infer P, ...other: any) => any ? P : never

declare function f1(obj: string, arg: { a: number; b: string }): string;

declare function f2(obj: string, arg: { c: boolean; d: string }): number;

function f(obj: FirstParam<typeof f1> & FirstParam<typeof f2>, arg: SecondParam<typeof f1> & SecondParam<typeof f2>): [ReturnType<typeof f1>, ReturnType<typeof f2>] {
    return [f1(obj, arg), f2(obj, arg)];
}

const [foo1, foo2] = f("demo", { a: 4, b: "", c: true, d: "bar" });
console.log(foo1);
console.log(foo2);

