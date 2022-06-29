export { };

class Duck {
    sound = "quack";
    swim() { console.log("Duck Swim!"); }
}

class Pinguin {
    sound = "...";
    swim() { console.log("Pinguin Swim!"); }
}

class Eagle {
    sound = "...";
}

let duck: Duck = new Duck();
let pinguin: Pinguin = new Pinguin();
let eagle: Eagle = new Eagle();

let duck2: Duck = new Pinguin();
let duck3: Duck = new Eagle();  // Error

console.log(duck2.swim());  // "Pinguin Swim!"