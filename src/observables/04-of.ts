import { of } from "rxjs";

// of --> converts the arguments to an observable sequence example of(1,2,3,4,5,6,7)

const obs$ = of(2, 3, 4, 5, 6, 7, 8, 9);

console.log("Start");
obs$.subscribe(
  (next) => console.log(next),
  null,
  () => console.log("Finish")
);
console.log("End");
