export { };

type Person = {
    readonly id: number,
    name: string,
    age: number,
    city?: string
};

type PartialPerson = Partial<Person>;

type RequiredPerson = Required<Person>;

type ReadonlyPerson = Readonly<Person>;

type ReadonlyPartialPerson = Readonly<Partial<Person>>; // Readonly<PartialPerson>

type ReadonlyRequiredPerson = Readonly<Required<Person>>; // Readonly<RequiredPerson>

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}

type MutablePerson = Mutable<Person>;
