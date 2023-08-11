import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log("Next  ", value),
    error:error => console.warn("Error [obs] ", error),
    complete:() => console.info("Complete")
}

const obs$ = new Observable<string>((subs) => {
    subs.next('Hello');
    subs.next('World');

    subs.next('Hello');
    subs.next('World');

    //create an error
    const a = undefined;
    a.nombre = 'Jesus';

    subs.complete();

    subs.next('Hello');
    subs.next('World');

});

obs$.subscribe(observer);

//other way
// obs$.subscribe(
//     valor => console.log("next", valor),
//     error => console.warn("next", error),
//     () => console.info("complete"),
// );

