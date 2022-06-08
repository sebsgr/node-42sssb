interface Colorful {
    color: string;
}

interface ColorfulNumbered {
    color: number;
}

interface Circle {
    radius: number;
}

type SimpleColorfulCircle = Colorful & Circle;

type ColorfulCircle = SimpleColorfulCircle & ColorfulNumbered;

var t : SimpleColorfulCircle = {
    color: 1,
    radius: 4
}

var s : ColorfulCircle = {
    color: 1,
    radius: 4
}
