export {};

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

var t : ColorfulCircle = {
    color: 1,
    radius: 4
}

