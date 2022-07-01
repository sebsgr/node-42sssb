export { };

type Test = string

type Point = { x: number, y: number };

type Cat = { meow: () => void };

type StringPropertyGetter = (obj: any) => string;

function printStringProperty(obj: any, getter: StringPropertyGetter) {
    console.log(getter(obj))
}

printStringProperty({ name: "Peter" }, obj => obj.peter)