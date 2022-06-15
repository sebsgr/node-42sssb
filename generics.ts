export { };

interface Nameable { name: string }

function loggingIdentity<T>(arg: T): T {
    console.log(arg);
    return arg;
}






class WrapedType<T extends () => any> {

    constructor(private value: T) { }

    public get(): T | undefined { return this.value; }

    public getReturn(): ReturnType<T> { return this.value(); }

    public set(value: T) { this.value = value; }
}

const wrapper: WrapedType<() => string> = new WrapedType(() => "");

wrapper.getReturn();
