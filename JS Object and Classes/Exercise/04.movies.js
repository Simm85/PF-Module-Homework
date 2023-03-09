//Problem !!! 20/100 points in Judje !!!
function movies(data) {
    let movieData = Array.from(data);
    let filtered = movieData.filter(element => element.includes('addMovie'));
    let addedMovies = [];

    for (let i = 0; i < filtered.length; i++) {
        filtered[i] = filtered[i].split(' ');
        filtered[i].splice(0, 1);
        if (filtered[i].length > 0) addedMovies.push(filtered[i].join(' '));
    }

    for (let movie of addedMovies) {
        let movieList = {};
        let currentMovieData = [];
        let currentDirector = [];
        let currentMovieDate;
        movieList['name'] = movie;

        for (let i = addedMovies.length; i < movieData.length; i++) {
            if (movieData[i].includes(movie)) {
                currentMovieData = movieData[i].split(' ');
                for (let j = 0; j < currentMovieData.length; j++) {
                    switch (currentMovieData[j]) {

                        case 'directedBy':
                            while (j < currentMovieData.length) {
                                j++;
                                if (currentMovieData[j] !== undefined) {
                                    currentDirector.push(currentMovieData[j]);
                                    movieList['director'] = currentDirector.join(' ').trim();
                                }
                            }
                            break;


                        case 'onDate':
                            j++;
                            currentMovieDate = currentMovieData[j];
                            if (currentMovieDate !== undefined)
                                movieList['date'] = currentMovieDate;
                            break;
                    }
                }
            }
        }
        if (Object.entries(movieList).length === 3) console.log(JSON.stringify(movieList));
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'addMovie',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Francis Ford Coppola'
]);

allHeros.sort((a, b) => a.level - b.level);

/**4.	Movies
Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
•	"addMovie {movie name}" – add the movie
•	"{movie name} directedBy {director}" – check if the movie exists and then add the director
•	"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
 */