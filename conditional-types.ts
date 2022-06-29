export { };

type Foo<T> = T extends string ? number : boolean;

type Bar<T> = T extends string ? number : never;

