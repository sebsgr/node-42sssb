export { };

type Colorful = {color: string}
 
function log<T extends Colorful>(arg: T): T {
    console.log(arg.color);  // 
    return arg
} 
 
log(3);  // Error
log({color: "red", value: 3});