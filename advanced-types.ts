export { };

declare function f1(obj: string, arg: { a: number, b: string, e?: string}): string;

declare function f2(obj: string, arg: { c: string, d: boolean }): number;

function f(obj: string, arg: { a: number, b: string, c: string, d: boolean }): [string, number] {
    return [f1(obj, arg), f2(obj, arg)];
}

type FirstParam<T extends ...> = ...

type SecondParam<T extends ...> = ...

