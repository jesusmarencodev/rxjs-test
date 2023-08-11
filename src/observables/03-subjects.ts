//subjects are observables that allow us to emit the same value no matter how many subscribers the observable has
import { Observable, Subject } from "rxjs";

const interval$ = new Observable<number>((subscriber) => {

  const interval = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("destroy interval");
  };
});
/* 
1- multiple cast
2- is also an observable
3- It has the next, error, and complete methods.
*/
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

subject$.subscribe(rnd => console.log("subs1 ", rnd));
subject$.subscribe(rnd => console.log("subs2 ", rnd));

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500)