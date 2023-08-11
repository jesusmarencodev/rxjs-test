import { range } from "rxjs";

// with range creates an observable that emits a sequence of numbers based on a range

const src$ = range(-5, 10);

console.log("Start");
src$.subscribe(console.log);
console.log("End");
