export { };

class CircleBuilder {
    protected radius = 0;

    public build() { return { radius: this.radius }; }

    public withRadius(radius: number): this {
        this.radius = radius;
        return this;
    }
}

class ColoredCircleBuilder extends CircleBuilder {
    private color = "black";

    public withColor(color: string): this {
        this.color = color;
        return this;
    }

    public build() { return { radius: this.radius, color: this.color }; }
}

let v1 = new CircleBuilder().withRadius(1).build(); // {radius: 1}

let v2 = new ColoredCircleBuilder().withColor("red").withRadius(5).build(); // {radius: 5, color: "red"}

let v3 = new ColoredCircleBuilder().withRadius(5).withColor("red").build(); // Error
