export { };

type Point = {
    x: number;
    y: number;
    z?: number;
    readonly color: string
    readonly name?: string
};

const point : Point = {
    x: 5,
    y: 10,
    z: 20,
    color: "red",
    name: "P1"
};

point.x = 10;

point.name = "P2"
