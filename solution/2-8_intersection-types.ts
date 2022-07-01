export { };

type Colorful = { color: string };
type Circle = { radius: number };

type ColorfulCircle = Colorful & Circle;

const t: ColorfulCircle = {
    color: "red",
    radius: 4
}

type Foo = string & number;

declare const foo: Foo;


