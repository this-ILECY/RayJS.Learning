import { of } from 'rxjs';
import './style.css';

/*
Here's an object containing movie details:
*/

const movies = [
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    director: 'Frank Darabont',
  },
  {
    title: 'The Godfather',
    genre: 'Crime',
    year: 1972,
    director: 'Francis Ford Coppola',
  },
  {
    title: 'Pulp Fiction',
    genre: 'Crime',
    year: 1994,
    director: 'Quentin Tarantino',
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    year: 2008,
    director: 'Christopher Nolan',
  },
  {
    title: 'Fight Club',
    genre: 'Drama',
    year: 1999,
    director: 'David Fincher',
  },
];

/*
Exercise:
Using the provided object of movie details, create a query that filters out the movies released before the year 2000 and transforms the remaining movies to display only the title and genre.

Here's a code template to get you started:
*/

const movies$ = of();
// Insert the movies object here

movies$
  .pipe
  // Add your operators here
  ()
  .subscribe((result) => {
    console.log(result);
  });

/*
Your task is to fill in the missing parts to achieve the desired transformation. Once you've completed the exercise, please provide your solution by sharing the modified code.
*/
