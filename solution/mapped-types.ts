export { };

type Person = {
    readonly id: number,
    name: string,
    age: number,
    city?: string
};

type OptionalPerson = {
    [P in keyof Person as `${P}s`]?: Person[P];
}

type StringPerson = {
    [P in keyof Person]: string;
}