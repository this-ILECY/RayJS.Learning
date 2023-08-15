import './style.css';

/*
Consider the following dataset of stock prices:
*/

const stockPrices = [
  { timestamp: 0, price: 100 },
  { timestamp: 1, price: 105 },
  { timestamp: 2, price: 98 },
  { timestamp: 3, price: 110 },
  { timestamp: 4, price: 95 },
];

/*
Exercise:
Using the provided dataset of stock prices, create a query that calculates the cumulative return over time. The cumulative return is calculated as the percentage change in price from the initial timestamp to the current timestamp.

To accomplish this exercise, you need to:

1. Use either the `interval` or `timer` operator to emit the stock prices over a specified time interval.
1. Use either the `reduce` or `scan` operator to calculate the cumulative return at each timestamp.

Here's a code template to get you started:
*/

import { interval, of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const stockPrices$ = of();
// Insert the stock prices object here

stockPrices$
  .pipe
  // Add your operators here
  ()
  .subscribe((result) => {
    console.log(result);
  });

/*
Your task is to fill in the missing parts by applying the appropriate operators to achieve the desired transformation. Once you've completed the exercise, please provide your solution by sharing the modified code.
*/
