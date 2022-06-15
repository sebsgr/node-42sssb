export { };

type Person = { name: string, age: number }

type PartialPerson = Partial<Person>;

type RequiredPerson = Required<Person>;

type ReadonlyPerson = Readonly<Person>;
