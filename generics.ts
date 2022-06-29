export { };

function log<T>(arg: T): T {
    console.log(arg);
    return arg;
}
 
let o1 : string = log("Hello World!"); 
let o2 : string = log(1);
let o3 : number = log(1);
