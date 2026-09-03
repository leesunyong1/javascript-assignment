const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  // TODO 1.
  const { title, vote_average, poster_path } = movie;

  // TODO 2.
  const card = document.createElement("div");
  card.className = "movie-card";

  // TODO 3.
  const poster = document.createElement("img");
  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";
  poster.alt = `${title} 포스터`;

  // TODO 4.
  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  // TODO 5.
  card.append(poster, titleEl, rating);
  return card;
}

function renderMovies(movies) {
  // TODO 6.
  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    container.append(card);
  });
}

async function getTopRatedMovies() {
  // TODO 7.
  container.textContent = "평점 높은 영화 목록을 불러오는 중...";

  const response = await fetch(URL, options);
  const data = await response.json();

  // TODO 8.
  container.textContent = "";

  // TODO 9.
  renderMovies(data.results);
}

getTopRatedMovies();