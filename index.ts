import './style.css';

import { of, map, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { range } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { reduce } from 'rxjs/operators';
import { scan } from 'rxjs/operators';
import { max } from 'rxjs/operators';
import { min } from 'rxjs/operators';
import { count } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';

const subs = new Subscription();

///////////////////Creating an observable:
const obs$ = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('world!');
  subscriber.complete();
});

// subs.add(obs$.subscribe((value) => console.log(value)));

///////////////////Using the fromEvent operator:

const button = document.querySelector('#myButton');

const click$ = fromEvent(button, 'click');

// subs.add(click$.subscribe((event) => console.log('Button clicked!', event)));

///////////////////Using the of operator:

const obs2$ = of(1, 2, 3, 4, 5);

// subs.add(obs2$.subscribe((value) => console.log(value)));

///////////////////Using the range operator:

const obs3$ = range(4, 5);

// subs.add(obs3$.subscribe((value) => console.log(value)));

///////////////////Using the from operator:

const obs4$ = from('hello!');

// subs.add(obs4$.subscribe((value) => console.log(value)));

///////////////////Using the interval operator:

const obs5$ = interval(1000);

// subs.add(obs5$.subscribe((value) => console.log(value)));

// Unsubscribe after 5 seconds

///////////////////Using the timer operator:

const obs6$ = timer(1000);

// subs.add(obs6$.subscribe((value) => console.log(value)));

///////////////////Using the map operator:

const obs7$ = of(1, 2, 3, 4, 5);

// obs7$.pipe(
//   map(value => value * 2)
// ).subscribe(value => console.log(value));

///////////////////Using the pluck operator:

const obs8$ = of(
  { name: 'John', age: 30, parent: { father: 'Josef', mother: 'Liz' } },
  { name: 'Jane', age: 25, parent: { father: 'Steve', mother: 'Sarah' } },
  { name: 'Bob', age: 40, parent: { father: 'Martin', mother: 'Janet' } }
);

// obs8$.pipe(pluck('parent','mother')).subscribe((value) => console.log(value));

///////////////////Using the mapTo operator:

const obs9$ = of(1, 2, 3, 4, 5);

// obs9$.pipe(
//   mapTo('Value')
// ).subscribe(value => console.log(value));

///////////////////Using the filter operator:
const obs10$ = of(1, 2, 3, 4, 5);

// obs10$.pipe(
//   filter(value => value % 2 === 0)
// ).subscribe(value => console.log(value));

///////////////////Using the reduce operator:

const obs11$ = of(1, 2, 3, 4, 5);

// obs11$.pipe(
//   reduce((acc, value) => acc + value, 0)
// ).subscribe(value => console.log(value));

///////////////////Using the scan operator:

const obs12$ = of(1, 2, 3, 4, 5);

// obs12$.pipe(
//   scan((acc, value) => acc + value, 0)
// ).subscribe(value => console.log(value));

///////////////////Using the max operator:

const obs13$ = of(1, 5, 3, 2, 4);

// obs13$.pipe(
//   max()
// ).subscribe(value => console.log(value));

///////////////////Using the min operator:

const obs14$ = of(1, 5, 3, 2, 4);

// obs14$.pipe(
//   min()
// ).subscribe(value => console.log(value));

///////////////////Using the count operator:

const obs15$ = of(1, 2, 3, 4, 5);

// obs15$.pipe(
//   count()
// ).subscribe(value => console.log(value));

setTimeout(() => {
  subs.unsubscribe();
}, 10000);

// import { of } from 'rxjs';
// import { map, filter, reduce } from 'rxjs/operators';
