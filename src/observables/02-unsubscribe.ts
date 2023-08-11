import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Next ", value),
  error: (error) => console.warn("Error [obs] ", error),
  complete: () => console.info("Complete"),
};

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  //unsubscribe doesn't not the same that complete
  setTimeout(()=>{
    subscriber.complete();
  },3000)

  //return is executed when unsubscribe is called
  return () => {
    clearInterval(interval);
    console.log("destroy interval")
  };
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);



setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();
  console.log("Completed timeout")
}, 3000);
