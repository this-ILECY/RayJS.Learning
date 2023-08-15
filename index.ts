import { of } from 'rxjs';
import './style.css';
/*
Here are some sample data titles:

1. The Great Gatsby
2. Pride and Prejudice
3. To Kill a Mockingbird
4. 1984
5. The Catcher in the Rye

Now, let's create an exercise based on these titles:

Exercise:
Using the provided list of book titles, create a query that filters out the titles starting with the letter 'T' and transforms the remaining titles to uppercase.

Here's a code template to get you started:
*/

const titles$ = of(
  'The Great Gatsby',
  'Pride and Prejudice',
  'To Kill a Mockingbird',
  '1984',
  'The Catcher in the Rye'
);

titles$
  .pipe
  // Add your operators here
  ()
  .subscribe((result) => {
    console.log(result);
  });

/*
Your task is to fill in the missing operators to achieve the desired transformation. Once you've completed the exercise, please provide your solution by sharing the modified code.
*/
