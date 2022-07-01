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
