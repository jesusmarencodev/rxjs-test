import { asyncScheduler } from "rxjs";

// with asyncScheduler  creates a subscription, a subscription is the product of a subscriber

//like setTimeout
// const hello = () => console.log("hello");
// const hello2 = (name) => console.log(`Hello ${name}`);

//asyncScheduler.schedule(hello, 2000);
//asyncScheduler.schedule(hello2, 2000, 'Jesus');

//like setInterval
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    this.schedule(state + 1, 1000);
  },
  1000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
