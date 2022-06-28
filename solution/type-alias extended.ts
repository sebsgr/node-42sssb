export { };

type Point = { x: number, y: number };



type Cat = { meow(): void };

type Lion = Cat & { name: string };
type Zebra = { name: string };
type Tiger = Cat & { name: string };
type Shark = { name: string };

type Gepard = Cat & { name: string };

type Animal = Lion | Zebra | Tiger | Shark | Gepard

type NotACat<A> = A extends Cat ? never : A

type NotACat2 = extends Cat

type EXCat = NotACat<Animal>



// @errors: 2344
declare function f1(obj: string, arg: { a: number; b: string }): void;
declare function f2(obj: string, arg: { d: boolean; c: string }): void;

type SingleParam<T extends (_: String, config: any) => any> = T extends (_: string, config: infer P) => any ? P : never

type ParamF1 = SingleParam<typeof f1>;
type ParamF2 = SingleParam<typeof f2>;

type ParamF1F2 = ParamF1 & ParamF2;

let p: ParamF1F2 = {
    a: 4,
    b: "",
    c: "",
    d: true
}