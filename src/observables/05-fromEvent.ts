import { fromEvent } from "rxjs";

// with fromEvent you can create observables based on events for example from the DOM(event target)

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log(val),
};

src1$.subscribe((event) => console.log(event.x, event.y));
src2$.subscribe((event) => {
  console.log(event.key);
});
