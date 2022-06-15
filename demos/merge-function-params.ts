export { };

type FirstParam<T extends (obj: any, ..._: any) => any> = T extends (obj: infer P, ..._: any) => any ? P : never

type SecondParam<T extends (_: any, config: any) => any> = T extends (_: any, config: infer P) => any ? P : never

declare function f1(obj: string, arg: { a: number; b: string }): void;

declare function f2(obj: string, arg: { d: boolean; c: string }): void;


function f(obj: FirstParam<typeof f1> & FirstParam<typeof f2>, arg: SecondParam<typeof f1> & SecondParam<typeof f2>): void {
    f1(obj, arg);
    f2(obj, arg);
}

f("demo", { a: 4, b: "", c: "", d: true });