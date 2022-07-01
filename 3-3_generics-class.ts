export { };

class ReadOnlyArray<T> {
    constructor(private innerArray: T[]) { }
 
    public getAtIndex(index : number): T{
        return this.innerArray[index];
    }
}
 
const numberArray = new ReadOnlyArray([1,2,3])
let o1 = numberArray.getAtIndex(0);           
 
const booleanArray = new ReadOnlyArray([true, false, false])
let o2 = booleanArray.getAtIndex(2);                        