// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')
    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

// display the liked movies on the page
const likedMovies = [];
let currentMovie = null;
const renderLikedMovies = () => {   
    // clean the container
    const likedMoviesContainer = document.getElementById('likedMoviesContainer');
    likedMoviesContainer.innerHTML = '';
    // Loop through liked movies and create cards for each
    likedMovies.forEach(movie => {
        const likedMovieCard = createLikedMovieCard(movie);
        likedMoviesContainer.appendChild(likedMovieCard);
    });
    // Show the liked movies container
    document.getElementById('likedMoviesSection').removeAttribute('hidden');
}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    likedMovies.push(currentMovie);     // 1. Save current movie
    renderLikedMovies();                // 2. Show liked list
    clearCurrentMovie();                // 3. Clear old content
    showRandomMovie();  
};


// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');
    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
    return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;
    return overviewParagraph;
};
// Create HTML for movie release date
const createMovieReleaseDate = (releaseDate) => {
    const dateParagraph = document.createElement('p');
    dateParagraph.setAttribute('id', 'movieReleaseDate');
    dateParagraph.innerHTML = releaseDate;
    return dateParagraph;
};
// Create HTML for movie cast
const createMovieCast = (cast) => {
    const castParagraph = document.createElement('p');
    castParagraph.setAttribute('id', 'movieCast');
    castParagraph.innerHTML = cast;
    return castParagraph;
};
// Create HTML for movie rating
const createMovieRating = (rating) => {
    const ratingParagraph = document.createElement('p');
    ratingParagraph.setAttribute('id', 'movieRating');
    ratingParagraph.innerHTML = `<strong>Rating:</strong> ${rating} / 10`;
    return ratingParagraph;
};
// create HTML for liked movies cards
const createLikedMovieCard = (movie) => {
    const likedMovieCard = document.createElement('div');
    likedMovieCard.classList.add('liked-movie-card');
    const cardImg = createMoviePoster(movie.poster_path);
    const cardTitle = createMovieTitle(movie.title);
    const cardRating = createMovieRating(movie.vote_average);
    likedMovieCard.append(cardImg, cardTitle, cardRating);
    return likedMovieCard;
}



// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};


// Uses the DOM to create HTML to display the movie
const displayMovie = async (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);
    const releaseDateText = createMovieReleaseDate(movieInfo.release_date);
    const movieCastData = await getMovieCast(movieInfo);
    const cast = movieCastData.cast.slice(0, 5).map(actor => actor.name).join(', ');
    const castText = createMovieCast(`<strong>Cast:</strong> ${cast}`);
    const movieRating = createMovieRating(movieInfo.vote_average);
    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);
    movieTextDiv.appendChild(releaseDateText);
    movieTextDiv.appendChild(castText);
    movieTextDiv.appendChild(movieRating);
    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
    currentMovie = movieInfo; 
};



