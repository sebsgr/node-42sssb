export { };

type Person = { name: string, age: number }

type PartialPerson = Partial<Person>;

type RequiredPerson = Required<Person>;

type ReadonlyPerson = Readonly<Person>;

type ReadonlyPartialPerson = Readonly<Partial<Person>>; // Readonly<PartialPerson>

type ReadonlyRequiredPerson = Readonly<Required<Person>>; // Readonly<RequiredPerson>
