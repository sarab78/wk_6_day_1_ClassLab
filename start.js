var movies = [
  {
     title: 'It\'s a Wonderful Life',
     year: 1946,
    director: 'Frank Capra',
    cast: [
       'James Stewart',
        'Donna Reed'
      ],
   ratings: { critic: 94, audience: 95 }
    },
    { title: 'Black Panther',
     year: 2018,
     director: 'Ryan Coogler',
     cast: [ 'Chadwick Boseman', 'Michael B. Jordan' ],
    ratings: { critic: 97, audience: 77 }
    },
   { title: 'Star Wars: The Last Jedi',
   year: 2017,
   director: 'Rian Johnson',
    cast: [ 'Mark Hamill', 'Carrie Fisher' ],
    ratings: { critic: 91, audience: 48 }
  },
  { title: 'Citizen Kane',
   year: 1941,
    director: 'Orson Welles',
    cast: [ 'Joseph Cotten', 'Dorothy Comingore' ],
    ratings: { critic: 100, audience: 90 }
  },
];


// 1. Loop through the array of movies and make each movie's title all capital letters.

// for(var movie of movies){
//   var title = movie.title;
//   var capsTitle = title.toUpperCase();
//   movie.title = capsTitle
// }
// console.log(movies);

// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.

for(var movie of movies){
  if (movie.title == "Citizen Kane"){
    console.log(movie.year);
  }
}

// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.

for(var i = 0; i < movies.length; i++){
  var movie = movies[i]
  console.log("title: ", movies.title);
  console.log("Audience Rating: ", movie.ratings.audience);
}
